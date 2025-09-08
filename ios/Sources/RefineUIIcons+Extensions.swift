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
    public init(refineUIIcon: RefineUIIcons) {
        #if os(macOS)
        self.init(nsImage: NSImage.refineUIIcon(refineUIIcon))
        #else
        self.init(uiImage: UIImage(refineUIIcon: refineUIIcon))
        #endif
    }
}

#if os(macOS)
import AppKit

private class RefineUIIconsBundleCheck {}

public extension NSImage {
#if REFINE_UI_ICONS_USE_RESOURCE_BUNDLES
    @objc static let refineUIIconBundle = Bundle(path: Bundle(for: RefineUIIconsBundleCheck.self).path(forResource: "RefineUIIcons", ofType: "bundle")!)
#else
    @objc static let refineUIIconBundle = Bundle(for: RefineUIIconsBundleCheck.self)
#endif
    
    @objc static func refineUIIcon(_ refineUIIcon: RefineUIIcons) -> NSImage {
        // Force unwrap here because the resource strings
        // are generated so we can be confident that the image
        // exits at runtime.
#if SWIFT_PACKAGE
        return Bundle.module.image(forResource: NSImage.Name(refineUIIcon.resourceString))!
#else
        return NSImage.refineUIIconBundle.image(forResource: NSImage.Name(refineUIIcon.resourceString))!
#endif
    }
}

#endif

#if os(iOS)
import UIKit

private class RefineUIIconsBundleCheck {}

public extension UIImage {
#if REFINE_UI_ICONS_USE_RESOURCE_BUNDLES
    @objc static let refineUIIconBundle = Bundle(path: Bundle(for: RefineUIIconsBundleCheck.self).path(forResource: "RefineUIIcons", ofType: "bundle")!)
#else
    @objc static let refineUIIconBundle = Bundle(for: RefineUIIconsBundleCheck.self)
#endif
    
    @objc convenience init(refineUIIcon: RefineUIIcons) {
        // Force unwrap here because the resource strings
        // are generated so we can be confident that the image
        // exits at runtime.
#if SWIFT_PACKAGE
        self.init(named: refineUIIcon.resourceString, in: Bundle.module, compatibleWith: nil)!
#else
        self.init(named: refineUIIcon.resourceString, in: UIImage.refineUIIconBundle, compatibleWith: nil)!
#endif
    }
}

public extension UIImageView {
    @objc convenience init(refineUIIcon: RefineUIIcons, tintColor: UIColor) {
        self.init(image: UIImage(refineUIIcon: refineUIIcon))
        self.tintColor = tintColor
    }
    
    @objc convenience init(refineUIIcon: RefineUIIcons, highlightedRefineUIIcon: RefineUIIcons, tintColor: UIColor) {
        self.init(image: UIImage(refineUIIcon: refineUIIcon), highlightedImage: UIImage(refineUIIcon: highlightedRefineUIIcon))
        self.tintColor = tintColor
    }
}
#endif
