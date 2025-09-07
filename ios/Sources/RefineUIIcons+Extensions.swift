//
//  Copyright (c) Pelagornis.
//  Licensed under the MIT license.
//

import SwiftUI

// MARK: - SwiftUI Extensions
extension Image {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIcon icon: RefineUIIcons) {
        self.init(icon.resourceString)
    }
}

#if os(macOS)
import AppKit

private class RefineUIIconsBundleCheck {}

public extension NSImage {
#if REFINE_UI_ICONS_USE_RESOURCE_BUNDLES
    @objc static let refineIconBundle = Bundle(path: Bundle(for: RefineUIIconsBundleCheck.self).path(forResource: "RefineUIIcons", ofType: "bundle")!)
#else
    @objc static let refineIconBundle = Bundle(for: RefineUIIconsBundleCheck.self)
#endif
    
    @objc static func refineIcon(_ refine: RefineUIIcons) -> NSImage {
        // Force unwrap here because the resource strings
        // are generated so we can be confident that the image
        // exits at runtime.
#if SWIFT_PACKAGE
        return Bundle.module.image(forResource: NSImage.Name(refine.resourceString))!
#else
        return NSImage.refineIconBundle.image(forResource: NSImage.Name(refine.resourceString))!
#endif
    }
}

#endif

#if os(iOS)
import UIKit

private class RefineUIIconsBundleCheck {}

public extension UIImage {
#if REFINE_UI_ICONS_USE_RESOURCE_BUNDLES
    @objc static let refineIconBundle = Bundle(path: Bundle(for: RefineUIIconsBundleCheck.self).path(forResource: "RefineUIIcons", ofType: "bundle")!)
#else
    @objc static let refineIconBundle = Bundle(for: RefineUIIconsBundleCheck.self)
#endif
    
    @objc convenience init(refine: RefineUIIcons) {
        // Force unwrap here because the resource strings
        // are generated so we can be confident that the image
        // exits at runtime.
#if SWIFT_PACKAGE
        self.init(named: refine.resourceString, in: Bundle.module, compatibleWith: nil)!
#else
        self.init(named: refine.resourceString, in: UIImage.refineIconBundle, compatibleWith: nil)!
#endif
    }
}

public extension UIImageView {
    @objc convenience init(refine: RefineUIIcons, tintColor: UIColor) {
        self.init(image: UIImage(refine: refine))
        self.tintColor = tintColor
    }
    
    @objc convenience init(refine: RefineUIIcons, highlightedRefine: RefineUIIcons, tintColor: UIColor) {
        self.init(image: UIImage(refine: refine), highlightedImage: UIImage(refine: highlightedRefine))
        self.tintColor = tintColor
    }
}
#endif
