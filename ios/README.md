# RefineUI System Icons - iOS

Native iOS integration for RefineUI System Icons with SwiftUI and UIKit support.

## 📦 Installation

### Swift Package Manager

Add to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/refineui/system-icons.git", from: "vTag")
]
```

Or add via Xcode:

1. File → Add Package Dependencies
2. Enter URL: `https://github.com/refineui/system-icons.git`
3. Select version and add to target

## 🚀 Quick Start

### SwiftUI Usage

```swift
import SwiftUI
import RefineUIIcons

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            // Basic usage
            Image(refineicon: .accessTime16Regular)
        }
    }
}
```

### UIKit Usage

```swift
import UIKit
import RefineUIIcons

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Create icon view
        let iconView = UIImage(refine: .accessTime16Regular)
        iconView.tintColor = .systemBlue

        // Add to view
        view.addSubview(iconView)
        iconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            iconView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            iconView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])

        // Add tap gesture
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(iconTapped))
        iconView.addGestureRecognizer(tapGesture)
        iconView.isUserInteractionEnabled = true
    }

    @objc func iconTapped() {
        print("Icon tapped!")
    }
}
```

## 🎨 Available Icons

### Icon Categories

- **Navigation**: `home`, `search`, `menu`, `back`, `forward`, `up`, `down`, `left`, `right`
- **Actions**: `add`, `edit`, `delete`, `save`, `cancel`, `refresh`, `download`, `upload`
- **Communication**: `mail`, `phone`, `chat`, `notification`, `bell`, `message`
- **Media**: `play`, `pause`, `stop`, `volume`, `mute`, `camera`, `image`, `video`
- **System**: `settings`, `gear`, `user`, `lock`, `unlock`, `key`, `shield`
- **Files**: `folder`, `file`, `document`, `image`, `pdf`, `zip`, `download`
- **And many more...** (434+ icons total)

### Icon Sizes

- **16px**: `size: 16`
- **20px**: `size: 20`
- **24px**: `size: 24` (default)
- **32px**: `size: 32`
- **48px**: `size: 48`


## 🛠️ Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/refineui/system-icons.git
cd system-icons

# Install dependencies
npm install

# Build iOS icons
npm run generate:ios
npm run build:ios
```

### Adding New Icons

1. Add SVG files to `src/icons/`
2. Run `npm run generate:metadata`
3. Run `npm run generate:ios`
4. Test your changes in iOS app

## 🐛 Troubleshooting

### Common Issues

1. **Icon not displaying**

   - Check if the icon name is correct
   - Verify the package is installed
   - Check Xcode console for errors

2. **Build issues**

   - Clean build folder (Cmd+Shift+K)
   - Delete derived data
   - Reinstall pods if using CocoaPods

3. **SwiftUI issues**
   - Ensure iOS deployment target is 13.0+
   - Check for conflicting view modifiers
   - Verify import statements

### Getting Help

- 📧 Email: support@pelagornis.com
- 🐛 Issues: [GitHub Issues](https://github.com/pelagornis/refineui-system-icons/issues)
- 💬 Community: [Slack](https://pelagornis.slack.com)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
