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
            Image(refineIcon: .accessTime16Regular)
                .resizable()
                .frame(width: 24, height: 24)

            // With tint color
            Image(refineIcon: .add24Filled)
                .resizable()
                .frame(width: 32, height: 32)
                .foregroundColor(.blue)

            // In a button
            Button(action: {}) {
                HStack {
                    Image(refineIcon: .save24Regular)
                        .resizable()
                        .frame(width: 20, height: 20)
                    Text("Save")
                }
            }
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

        // Basic usage - Create icon image
        let iconImage = UIImage(refine: .accessTime16Regular)

        // Create image view
        let iconView = UIImageView(image: iconImage)
        iconView.tintColor = .systemBlue
        iconView.contentMode = .scaleAspectFit

        // Add to view
        view.addSubview(iconView)
        iconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            iconView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            iconView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            iconView.widthAnchor.constraint(equalToConstant: 24),
            iconView.heightAnchor.constraint(equalToConstant: 24)
        ])

        // In a button
        let button = UIButton(type: .system)
        button.setImage(UIImage(refine: .save24Regular), for: .normal)
        button.setTitle("Save", for: .normal)
        button.tintColor = .systemBlue

        view.addSubview(button)
        button.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            button.topAnchor.constraint(equalTo: iconView.bottomAnchor, constant: 20),
            button.centerXAnchor.constraint(equalTo: view.centerXAnchor)
        ])

        // Using convenience initializer
        let addIconView = UIImageView(refine: .add24Filled, tintColor: .systemGreen)
        view.addSubview(addIconView)
        addIconView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            addIconView.topAnchor.constraint(equalTo: button.bottomAnchor, constant: 20),
            addIconView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            addIconView.widthAnchor.constraint(equalToConstant: 32),
            addIconView.heightAnchor.constraint(equalToConstant: 32)
        ])
    }
}
```

## 🎨 Available Icons

### Icon Categories

- **Navigation**: `home24Regular`, `search24Regular`, `menu24Regular`, `arrowLeft24Regular`, `arrowRight24Regular`
- **Actions**: `add24Regular`, `edit24Regular`, `delete24Regular`, `save24Regular`, `cancel24Regular`, `refresh24Regular`
- **Communication**: `mail24Regular`, `phone24Regular`, `chat24Regular`, `notification24Regular`, `bell24Regular`
- **Media**: `play24Regular`, `pause24Regular`, `stop24Regular`, `volume24Regular`, `mute24Regular`, `camera24Regular`
- **System**: `settings24Regular`, `gear24Regular`, `person24Regular`, `lock24Regular`, `key24Regular`, `shield24Regular`
- **Files**: `folder24Regular`, `document24Regular`, `image24Regular`, `download24Regular`
- **And many more...** (434+ icons total)

### Icon Naming Convention

Icons follow the pattern: `{name}{size}{style}`

- **Size**: `16`, `20`, `24`, `28`, `32`, `48`
- **Style**: `Filled` or `Regular`

Examples:

- `add24Regular` - 24px regular style add icon
- `home16Filled` - 16px filled style home icon
- `settings32Filled` - 32px filled style settings icon

### Available Sizes

All icons are available in the following sizes:

- **16px**: `{name}16{style}` (e.g., `add16Regular`)
- **20px**: `{name}20{style}` (e.g., `add20Regular`)
- **24px**: `{name}24{style}` (e.g., `add24Regular`) - Most common
- **28px**: `{name}28{style}` (e.g., `add28Regular`)
- **32px**: `{name}32{style}` (e.g., `add32Regular`)
- **48px**: `{name}48{style}` (e.g., `add48Regular`)

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
