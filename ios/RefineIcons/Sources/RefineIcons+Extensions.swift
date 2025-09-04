import SwiftUI

// MARK: - SwiftUI Extensions
extension Image {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIcon icon: RefineIcons) {
        self.init(systemName: icon.unicode)
    }
    
    /// Create an image from RefineUI filled icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Image
    public init(refineIconFilled icon: RefineIconsFilled) {
        self.init(systemName: icon.unicode)
    }
}

extension Text {
    /// Create text from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Text
    public init(refineIcon icon: RefineIcons) {
        self.init(icon.unicode)
    }
    
    /// Create text from RefineUI filled icon
    /// - Parameter icon: The icon to display
    /// - Returns: SwiftUI Text
    public init(refineIconFilled icon: RefineIconsFilled) {
        self.init(icon.unicode)
    }
}

// MARK: - UIKit Extensions
#if canImport(UIKit)
import UIKit

extension UIImage {
    /// Create an image from RefineUI icon
    /// - Parameter icon: The icon to display
    /// - Returns: UIImage
    public convenience init?(refineIcon icon: RefineIcons, size: CGSize = CGSize(width: 24, height: 24)) {
        let font = UIFont(name: icon.fontFamily, size: size.width) ?? UIFont.systemFont(ofSize: size.width)
        let attributes: [NSAttributedString.Key: Any] = [
            .font: font,
            .foregroundColor: UIColor.black
        ]
        
        let attributedString = NSAttributedString(string: icon.unicode, attributes: attributes)
        let textSize = attributedString.size()
        
        UIGraphicsBeginImageContextWithOptions(size, false, 0)
        defer { UIGraphicsEndImageContext() }
        
        let rect = CGRect(
            x: (size.width - textSize.width) / 2,
            y: (size.height - textSize.height) / 2,
            width: textSize.width,
            height: textSize.height
        )
        
        attributedString.draw(in: rect)
        
        guard let image = UIGraphicsGetImageFromCurrentImageContext() else { return nil }
        self.init(cgImage: image.cgImage!)
    }
}
#endif
