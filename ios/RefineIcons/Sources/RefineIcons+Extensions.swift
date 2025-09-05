import SwiftUI
import UIKit

// MARK: - SwiftUI Extensions
extension Image {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIcon icon: RefineIcons) {
        self.init(icon.resourceString, bundle: Bundle.module)
    }
}

// MARK: - UIKit Extensions
#if canImport(UIKit)
import UIKit

extension UIImage {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: UIImage
    public convenience init?(refineIcon icon: RefineIcons) {
        self.init(named: icon.resourceString, in: Bundle.module, compatibleWith: nil)
    }
}
#endif
