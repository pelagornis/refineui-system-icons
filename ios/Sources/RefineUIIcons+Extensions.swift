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

public extension NSImage {
    @objc static func refineUIIcon(_ refineUIIcon: RefineUIIcons) -> NSImage {
        // Use Bundle.module for Swift Package Manager resources
        return Bundle.module.image(forResource: NSImage.Name(refineUIIcon.resourceString))!
    }
}

#endif

#if os(iOS)
import UIKit

public extension UIImage {
    @objc convenience init(refineUIIcon: RefineUIIcons) {
        // Use Bundle.module for Swift Package Manager resources
        self.init(named: refineUIIcon.resourceString, in: Bundle.module, compatibleWith: nil)!
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
