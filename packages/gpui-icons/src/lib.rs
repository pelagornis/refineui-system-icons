//! Embedded [RefineUI System Icons](https://github.com/pelagornis/refineui-system-icons)
//! for [GPUI](https://www.gpui.rs/).
//!
//! ```no_run
//! use gpui::{img, px, Styled};
//! use refineui_gpui_icons::{icons, Icon};
//!
//! let add = img(Icon::new(icons::ADD).regular().at(24)).w(px(24.)).h(px(24.));
//! # let _ = add;
//! ```
//!
//! GPUI rasterizes SVGs when they are first used. Images are cached by icon,
//! size, and style, so it is safe to construct `Icon` values during render.

use std::fmt;
#[cfg(feature = "gpui")]
use std::{collections::HashMap, sync::{Arc, Mutex, OnceLock}};

/// The visual treatment of an icon.
#[derive(Clone, Copy, Debug, Default, Eq, Hash, PartialEq)]
pub enum IconStyle {
    /// The outlined treatment.
    #[default]
    Regular,
    /// The solid treatment.
    Filled,
}

/// An icon's stable kebab-case identifier, such as `add` or `local-language`.
#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq)]
pub struct IconName(&'static str);

impl IconName {
    /// Creates an icon name. Prefer constants from [`icons`] for static names.
    pub const fn new(slug: &'static str) -> Self { Self(slug) }
    /// Returns the kebab-case name used by the source assets.
    pub const fn as_str(self) -> &'static str { self.0 }
}

/// A selected RefineUI glyph. Its default is a 24px regular icon.
#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq)]
pub struct Icon { name: IconName, size: u16, style: IconStyle }

impl Icon {
    /// Starts a 24px regular icon selection.
    pub const fn new(name: IconName) -> Self { Self { name, size: 24, style: IconStyle::Regular } }
    /// Selects the source glyph drawn at `size` pixels.
    pub const fn at(mut self, size: u16) -> Self { self.size = size; self }
    /// Selects the regular treatment.
    pub const fn regular(mut self) -> Self { self.style = IconStyle::Regular; self }
    /// Selects the filled treatment.
    pub const fn filled(mut self) -> Self { self.style = IconStyle::Filled; self }
    /// Returns the source SVG for a custom GPUI asset pipeline.
    pub fn svg(self) -> Option<&'static str> {
        ASSETS.iter().find(|asset| asset.slug == self.name.0 && asset.size == self.size && asset.style == self.style).map(|asset| asset.svg)
    }
    /// Returns whether this exact icon, size, and style is embedded.
    pub fn is_available(self) -> bool { self.svg().is_some() }
    /// Returns the selected source size.
    pub const fn size(self) -> u16 { self.size }
    /// Returns the selected treatment.
    pub const fn style(self) -> IconStyle { self.style }
    /// Returns the icon identifier.
    pub const fn name(self) -> IconName { self.name }
    /// Returns every generated icon identifier in alphabetical order.
    pub fn names() -> &'static [IconName] { NAMES }
}

impl fmt::Display for Icon {
    fn fmt(&self, formatter: &mut fmt::Formatter<'_>) -> fmt::Result { write!(formatter, "{}-{}-{:?}", self.name.0, self.size, self.style) }
}

struct IconAsset { slug: &'static str, size: u16, style: IconStyle, svg: &'static str }
include!(concat!(env!("OUT_DIR"), "/generated.rs"));

#[cfg(feature = "gpui")]
impl Icon {
    /// Returns a cached GPUI image. It can be passed to `gpui::img` directly.
    pub fn image(self) -> Option<Arc<gpui::Image>> {
        static CACHE: OnceLock<Mutex<HashMap<Icon, Arc<gpui::Image>>>> = OnceLock::new();
        let svg = self.svg()?;
        let mut cache = CACHE.get_or_init(|| Mutex::new(HashMap::new())).lock().expect("RefineUI icon cache lock");
        Some(cache.entry(self).or_insert_with(|| Arc::new(gpui::Image::from_bytes(gpui::ImageFormat::Svg, svg.as_bytes().to_vec()))).clone())
    }
}

#[cfg(feature = "gpui")]
impl From<Icon> for gpui::ImageSource {
    fn from(icon: Icon) -> Self {
        let description = icon.to_string();
        icon.image().unwrap_or_else(|| panic!("RefineUI icon asset is unavailable: {description}")).into()
    }
}

#[cfg(test)]
mod tests {
    use super::{icons, Icon};
    #[test]
    fn finds_a_known_icon() { assert!(Icon::new(icons::ADD).at(24).regular().is_available()); }
    #[test]
    fn rejects_an_unknown_size() { assert!(!Icon::new(icons::ADD).at(13).is_available()); }
}
