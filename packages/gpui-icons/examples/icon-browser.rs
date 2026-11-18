//! Run with:
//! `cargo +1.98.1 run --manifest-path packages/gpui-icons/Cargo.toml --features browser --example icon-browser`

use gpui::{
    App, Bounds, Context, Render, Window, WindowBounds, WindowOptions, div, img, prelude::*, px,
    rgb, size,
};
use gpui_platform::application;
use refineui_gpui_icons::Icon;

struct IconBrowser;

impl Render for IconBrowser {
    fn render(&mut self, _window: &mut Window, _cx: &mut Context<Self>) -> impl IntoElement {
        let icon_cards = Icon::names().iter().copied().filter_map(|name| {
            let icon = Icon::new(name).regular().at(24);
            icon.image().map(|image| {
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
                    .child(img(image).w(px(24.)).h(px(24.)))
                    .child(name.as_str())
            })
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
                    .child(format!("RefineUI System Icons · {} icons", Icon::names().len())),
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
            |_, cx| cx.new(|_| IconBrowser),
        )
        .expect("open icon browser window");
        cx.activate(true);
    });
}
