# RefineUI GPUI Icons

Embedded RefineUI System Icons for GPUI. The package reads the repository's
source SVGs at build time, so a Git dependency contains every icon without an
application asset-registration step. Use the current stable Rust toolchain
recommended by GPUI.

```toml
[dependencies]
gpui = { git = "https://github.com/zed-industries/zed", package = "gpui" }
refineui-gpui-icons = { git = "https://github.com/pelagornis/refineui-system-icons.git", package = "refineui-gpui-icons" }
```

```rust
use gpui::{img, px, Styled};
use refineui_gpui_icons::{icons, Icon};

let save_icon = img(Icon::new(icons::SAVE).filled().at(24)).w(px(24.)).h(px(24.));
```

`Icon` implements `Into<gpui::ImageSource>`, therefore it can be passed to
`img` directly. It defaults to 24px regular. `icons` contains a constant for
every kebab-case icon name in screaming snake case: `local-language` becomes
`icons::LOCAL_LANGUAGE`.

GPUI rasterizes SVGs as images and does not apply CSS `currentColor`. RefineUI
icons therefore render with their source black fill. Use `Icon::svg()` when you
need to transform SVG text before loading it through your application's asset
pipeline.

## Icon browser example

Run the included GPUI icon browser to inspect the complete set:

```bash
cargo +1.98.1 run --manifest-path packages/gpui-icons/Cargo.toml --features browser --example icon-browser
```

On macOS, GPUI requires Xcode and its Metal Toolchain. If the compiler reports
that it cannot execute `metal`, install it with `xcodebuild -downloadComponent MetalToolchain`.
