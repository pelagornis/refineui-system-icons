use std::{
    collections::BTreeSet,
    env,
    fs::{self, File},
    io::Write,
    path::{Path, PathBuf},
};

fn visit(dir: &Path, files: &mut Vec<PathBuf>) {
    for entry in fs::read_dir(dir).expect("read RefineUI asset directory") {
        let path = entry.expect("read RefineUI asset entry").path();
        if path.is_dir() {
            visit(&path, files);
        } else if path.extension().and_then(|extension| extension.to_str()) == Some("svg") {
            files.push(path);
        }
    }
}

fn parse_asset(path: &Path) -> Option<(String, u16, String)> {
    let file = path.file_stem()?.to_str()?.strip_prefix("ic_refineui_")?;
    let (file, style) = file.rsplit_once('_')?;
    let (slug, size) = file.rsplit_once('_')?;
    let size = size.parse().ok()?;
    matches!(style, "regular" | "filled").then(|| (slug.to_owned(), size, style.to_owned()))
}

fn constant_name(slug: &str) -> String {
    let mut name = slug.replace('-', "_").to_ascii_uppercase();
    if name.chars().next().is_some_and(|character| character.is_ascii_digit()) {
        name.insert(0, '_');
    }
    name
}

fn main() {
    let manifest_dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR").expect("manifest directory"));
    let asset_dir = manifest_dir.join("../../assets");
    println!("cargo:rerun-if-changed={}", asset_dir.display());
    let out_dir = PathBuf::from(env::var("OUT_DIR").expect("output directory"));
    let copied_dir = out_dir.join("refineui-icons");
    fs::create_dir_all(&copied_dir).expect("create generated icon directory");

    let mut files = Vec::new();
    visit(&asset_dir, &mut files);
    files.sort();
    let mut assets = Vec::new();
    let mut slugs = BTreeSet::new();
    for (index, source) in files.iter().enumerate() {
        let Some((slug, size, style)) = parse_asset(source) else { continue };
        fs::copy(source, copied_dir.join(format!("{index}.svg"))).expect("copy icon into build output");
        assets.push((slug.clone(), size, style, index));
        slugs.insert(slug);
    }

    let mut generated = File::create(out_dir.join("generated.rs")).expect("create generated registry");
    writeln!(generated, "pub(crate) static ASSETS: &[IconAsset] = &[").unwrap();
    for (slug, size, style, index) in assets {
        writeln!(generated, "    IconAsset {{ slug: {slug:?}, size: {size}, style: IconStyle::{}, svg: include_str!(concat!(env!(\"OUT_DIR\"), \"/refineui-icons/{index}.svg\")) }},", if style == "regular" { "Regular" } else { "Filled" }).unwrap();
    }
    writeln!(generated, "];\n").unwrap();
    writeln!(generated, "/// Every generated icon identifier, in alphabetical order.\npub static NAMES: &[IconName] = &[").unwrap();
    for slug in &slugs {
        writeln!(generated, "    IconName::new({slug:?}),").unwrap();
    }
    writeln!(generated, "];\n").unwrap();
    writeln!(generated, "/// Named icon identifiers for use with [`Icon`].\npub mod icons {{\n    use super::IconName;").unwrap();
    for slug in slugs {
        writeln!(generated, "    pub const {}: IconName = IconName::new({slug:?});", constant_name(&slug)).unwrap();
    }
    writeln!(generated, "}}").unwrap();
}
