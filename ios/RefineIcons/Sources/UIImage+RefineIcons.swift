#if os(iOS)
import UIKit

private class RefineIconsBundle {}

public extension UIImage {
    @objc static let refineIconsBundle = Bundle(for: RefineIconsBundle.self)

    @objc convenience init(icon: RefineIcon) {
        #if SWIFT_PACKAGE
        self.init(named: icon.iconName, in: Bundle.module, compatibleWith: nil)!
        #else
        self.init(named: icon.iconName, in: UIImage.refineIconsBundle, compatibleWith: nil)!
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