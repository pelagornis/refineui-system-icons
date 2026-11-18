//! Run with:
//! `cargo +1.98.1 run -p refineui-gpui-icon-browser`

use gpui::{
    div, img, prelude::*, px, rgb, size, App, Bounds, Context, Render, RenderImage, Window,
    WindowBounds, WindowOptions,
};
use gpui_platform::application;
use refineui_system_icons::{Icon, IconName};
use std::sync::Arc;

struct IconBrowser {
    icons: Vec<(IconName, Arc<RenderImage>)>,
}

impl IconBrowser {
    fn new(cx: &mut Context<Self>) -> Self {
        let renderer = cx.svg_renderer();
        let icons = Icon::names()
            .iter()
            .copied()
            .filter_map(|name| {
                Icon::new(name)
                    .regular()
                    .at(24)
                    .render_image(&renderer)
                    .map(|image| (name, image))
            })
            .collect();
        Self { icons }
    }
}

impl Render for IconBrowser {
    fn render(&mut self, _window: &mut Window, _cx: &mut Context<Self>) -> impl IntoElement {
        let icon_cards = self.icons.iter().map(|(name, image)| {
            div()
                .w(px(128.))
                .h(px(104.))
                .p_3()
                .flex()
                .flex_col()
                .items_center()
                .justify_center()
                .gap_2()
                .rounded_md()
                .bg(rgb(0xf8fafc))
                .border_1()
                .border_color(rgb(0xe2e8f0))
                .child(img(image.clone()).w(px(24.)).h(px(24.)))
                .child(name.as_str())
        });

        div()
            .size_full()
            .flex()
            .flex_col()
            .bg(rgb(0xffffff))
            .text_color(rgb(0x0f172a))
            .child(
                div()
                    .flex_none()
                    .p_5()
                    .border_b_1()
                    .border_color(rgb(0xe2e8f0))
                    .text_xl()
                    .child(format!(
                        "RefineUI System Icons · {} icons",
                        self.icons.len()
                    )),
            )
            .child(
                div()
                    .id("icon-browser")
                    .flex_1()
                    .overflow_scroll()
                    .p_5()
                    .flex()
                    .flex_wrap()
                    .gap_3()
                    .children(icon_cards),
            )
    }
}

fn main() {
    application().run(|cx: &mut App| {
        let bounds = Bounds::centered(None, size(px(1040.), px(760.)), cx);
        cx.open_window(
            WindowOptions {
                window_bounds: Some(WindowBounds::Windowed(bounds)),
                ..Default::default()
            },
            |_, cx| cx.new(IconBrowser::new),
        )
        .expect("open icon browser window");
        cx.activate(true);
    });
}
