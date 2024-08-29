#if os(macOS)
import AppKit
private class RefineIconsBundle {}

public extension NSImage {
    @objc static let refineIconsBundle = Bundle(for: RefineIconsBundle.self)

    @objc static func refineIcon(_ icon: RefineIcon) -> NSImage {
        #if SWIFT_PACKAGE
        return Bundle.module.image(forResource: NSImage.Name(icon.iconName))!
        #else
        return NSImage.refineIconsBundle.image(forResource: NSImage.Name(icon.iconName))!
        #endif
    }
}
#endif