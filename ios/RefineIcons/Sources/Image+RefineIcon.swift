#if os(macOS)
import AppKit
private class RefineIconsBundle {}

public extension NSImage {
    @objc static let refineIconsBundle = Bundle(for: RefineIconsBundle.self)

    @objc static func refineIcon(_ icon: RefineIcon) -> NSImage {
        #if SWIFT_PACKAGE
        return Bundle.module.image(forResource: NSImage.Name(icon.resourceString))!
        #else
        return NSImage.refineIconsBundle.image(forResource: NSImage.Name(icon.resourceString))!
        #endif
    }
}
#endif

#if os(iOS)
import UIKit

private class RefineIconsBundle {}

public extension UIImage {
    @objc static let refineIconsBundle = Bundle(for: RefineIconsBundle.self)

    @objc convenience init(icon: RefineIcon) {
        #if SWIFT_PACKAGE
        self.init(named: icon.resourceString, in: Bundle.module, compatibleWith: nil)!
        #else
        self.init(named: icon.resourceString, in: UIImage.refineIconsBundle, compatibleWith: nil)!
        #endif
    }
}

public extension UIImageView {
    @objc convenience init(_ icon: RefineIcon, tintColor: UIColor) {
        self.init(image: UIImage(icon: icon))
        self.tintColor = tintColor
    }

    @objc convenience init(_ icon: RefineIcon, highlightedIcon: RefineIcon, tintColor: UIColor) {
        self.init(image: UIImage(icon: icon), highlightedImage: UIImage(icon: icon))
        self.tintColor = tintColor
    }
}
#endif