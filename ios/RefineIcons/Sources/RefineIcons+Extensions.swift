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
    public init(refineIcon icon: RefineIcons) {
        self.init(icon.resourceString)
    }
}

#if os(macOS)
import AppKit

private class RefineIconsBundleCheck {}

public extension NSImage {
#if REFINE_ICONS_USE_RESOURCE_BUNDLES
  @objc static let refineIconBundle = Bundle(path: Bundle(for: RefineIconsBundleCheck.self).path(forResource: "RefineIcons", ofType: "bundle")!)
#else
  @objc static let refineIconBundle = Bundle(for: RefineIconsBundleCheck.self)
#endif

  @objc static func refineIcon(_ refine: RefineIcons) -> NSImage {
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

private class RefineIconsBundleCheck {}

public extension UIImage {
#if REFINE_ICONS_USE_RESOURCE_BUNDLES
  @objc static let refineIconBundle = Bundle(path: Bundle(for: RefineIconsBundleCheck.self).path(forResource: "RefineIcons", ofType: "bundle")!)
#else
  @objc static let refineIconBundle = Bundle(for: RefineIconsBundleCheck.self)
#endif

  @objc convenience init(refine: RefineIcons) {
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
  @objc convenience init(refine: RefineIcons, tintColor: UIColor) {
    self.init(image: UIImage(refine: refine))
    self.tintColor = tintColor
  }

  @objc convenience init(refine: RefineIcons, highlightedRefine: RefineIcons, tintColor: UIColor) {
    self.init(image: UIImage(refine: refine), highlightedImage: UIImage(refine: highlightedRefine))
    self.tintColor = tintColor
  }
}
#endif
