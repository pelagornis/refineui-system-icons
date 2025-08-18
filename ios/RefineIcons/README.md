# RefineIcons for iOS

RefineUI System Icons for iOS - Native Swift implementation

## Installation

### 1. Add to Xcode Project

1. Drag the `Assets.xcassets` folder to your Xcode project
2. Add `RefineIcon.swift` to your Xcode project
3. Make sure "Copy items if needed" is checked

### 2. Add Images

For each icon you want to use, add the corresponding PNG images to the imageset:

- `ic_refine_[icon_name]_[size]_[theme].png` (1x)
- `ic_refine_[icon_name]_[size]_[theme]@2x.png` (2x)
- `ic_refine_[icon_name]_[size]_[theme]@3x.png` (3x)

## Usage

### Basic Usage

```swift
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Create image view with icon
        let imageView = UIImageView()
        imageView.image = RefineIcon.Gavel28Regular.image
        imageView.tintColor = .systemBlue

        // Or use directly
        let button = UIButton(type: .system)
        button.setImage(RefineIcon.Settings32Filled.image, for: .normal)
    }
}
```

### Icon Naming Convention

Icons follow this naming pattern:

- `[IconName][Size][Theme]` - e.g., `Gavel28Regular`, `Settings32Filled`
- Names are PascalCase
- Sizes: 12, 16, 20, 24, 28, 32, 48
- Themes: Regular, Filled

### Available Icons

All icons are available as enum cases:

```swift
// Regular icons
RefineIcon.Gavel28Regular
RefineIcon.Settings32Regular
RefineIcon.Home24Regular
RefineIcon.Search20Regular

// Filled icons
RefineIcon.Gavel28Filled
RefineIcon.Settings32Filled
RefineIcon.Home24Filled
RefineIcon.Search20Filled
```

### Advanced Usage

#### Programmatic Access

```swift
// Get icon name
let iconName = RefineIcon.Gavel28Regular.iconName
// Returns: "ic_refine_gavel_28_regular"

// Get image with custom tint
let image = RefineIcon.Gavel28Regular.image?.withRenderingMode(.alwaysTemplate)
```

#### Dynamic Icon Selection

```swift
func getIcon(for name: String, size: String, theme: String) -> UIImage? {
    let caseName = "\(name)\(size)\(theme)"
    if let iconCase = RefineIcon(rawValue: caseName) {
        return iconCase.image
    }
    return nil
}

// Usage
let icon = getIcon(for: "Gavel", size: "28", theme: "Regular")
```

#### List All Icons

```swift
// Get all available icons
let allIcons = RefineIcon.allCases

// Print all icon names
for icon in RefineIcon.allCases {
    print("\(icon): \(icon.iconName)")
}
```

## Icon Categories

The library includes icons for various categories:

- **Actions**: Add, Delete, Edit, Save, etc.
- **Communication**: Chat, Mail, Phone, etc.
- **Navigation**: Home, Settings, Search, etc.
- **Objects**: Document, Folder, Image, etc.
- **Status**: Alert, Checkmark, Error, etc.
- **And many more...**

## Performance

This native iOS implementation provides:

- **Native performance**: Direct UIImage usage
- **Memory efficient**: Only loads used images
- **Type-safe**: Compile-time checking
- **Auto-completion**: Xcode provides full autocomplete

## Requirements

- iOS 12.0+
- Swift 5.0+
- Xcode 12.0+

## License

MIT License - see LICENSE file for details.
