//
//  Copyright (c) Pelagornis.
//  Licensed under the MIT license.
//

import SwiftUI

private enum RefineUIIconBundle {
    static var current: Bundle {
#if SWIFT_PACKAGE
        Bundle.module
#elseif REFINE_UI_ICONS_USE_RESOURCE_BUNDLES
        Bundle(path: Bundle(for: RefineUIIconsBundleCheck.self).path(forResource: "RefineUIIcons", ofType: "bundle")!)!
#else
        Bundle(for: RefineUIIconsBundleCheck.self)
#endif
    }
}

private func refineUIIconResourceCandidates(for resourceName: String) -> [String] {
    guard resourceName.hasPrefix("ic_refineui_") else {
        return [resourceName]
    }

    let suffix = resourceName.dropFirst("ic_refineui_".count)
    let parts = suffix.split(separator: "_", omittingEmptySubsequences: false)
    guard parts.count >= 3 else {
        return [resourceName]
    }

    let size = parts[parts.count - 2]
    let style = parts[parts.count - 1]
    let iconParts = parts.dropLast(2)
    let hyphenVariant = "ic_refineui_\(iconParts.joined(separator: "-"))_\(size)_\(style)"
    let underscoreVariant = "ic_refineui_\(iconParts.joined(separator: "_"))_\(size)_\(style)"

    var seen = Set<String>()
    return [resourceName, hyphenVariant, underscoreVariant].filter { seen.insert($0).inserted }
}

// MARK: - SwiftUI Extensions
extension Image {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineUIIcon: RefineUIIcons) {
        #if os(macOS)
        self.init(nsImage: NSImage.refineUIIcon(refineUIIcon))
        #else
        self.init(uiImage: UIImage.refineUIIcon(refineUIIcon))
        #endif
    }
}

private class RefineUIIconsBundleCheck {}

#if os(macOS)
import AppKit

public extension NSImage {
    @objc static func refineUIIcon(_ refineUIIcon: RefineUIIcons) -> NSImage {
        let bundles = [RefineUIIconBundle.current, .main]
        for candidate in refineUIIconResourceCandidates(for: refineUIIcon.resourceString) {
            for bundle in bundles {
                if let image = bundle.image(forResource: NSImage.Name(candidate)) {
                    return image
                }
            }
        }
        return NSImage()
    }
}

#endif

#if os(iOS)
import UIKit

public extension UIImage {
    @objc static func refineUIIcon(_ refineUIIcon: RefineUIIcons) -> UIImage {
        let bundles = [RefineUIIconBundle.current, .main]
        for candidate in refineUIIconResourceCandidates(for: refineUIIcon.resourceString) {
            for bundle in bundles {
                if let image = UIImage(named: candidate, in: bundle, compatibleWith: nil) {
                    return image
                }
            }
        }
        return UIImage()
    }
}

public extension UIImageView {
    @objc convenience init(refineUIIcon: RefineUIIcons, tintColor: UIColor) {
        self.init(image: UIImage.refineUIIcon(refineUIIcon))
        self.tintColor = tintColor
    }

    @objc convenience init(refineUIIcon: RefineUIIcons, highlightedRefineUIIcon: RefineUIIcons, tintColor: UIColor) {
        self.init(
            image: UIImage.refineUIIcon(refineUIIcon),
            highlightedImage: UIImage.refineUIIcon(highlightedRefineUIIcon)
        )
        self.tintColor = tintColor
    }
}
#endif
