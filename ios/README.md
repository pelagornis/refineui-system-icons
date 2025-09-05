# RefineUI System Icons - iOS

Native iOS integration for RefineUI System Icons with SwiftUI and UIKit support.

## 📦 Installation

### CocoaPods

Add to your `Podfile`:

```ruby
pod 'RefineIcons'
```

Then run:

```bash
pod install
```

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
import RefineIcons

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            // Basic usage
            RefineUIIcon(name: "home", size: 24)

            // With custom color
            RefineUIIcon(name: "search", size: 20, color: .blue)

            // With custom foreground color
            RefineUIIcon(name: "settings", size: 16)
                .foregroundColor(.red)

            // With onTapGesture
            RefineUIIcon(name: "heart", size: 24)
                .onTapGesture {
                    print("Heart tapped!")
                }
        }
    }
}
```

### UIKit Usage

```swift
import UIKit
import RefineIcons

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Create icon view
        let iconView = RefineUIIconView(name: "home", size: 24)
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

## 🔧 Advanced Usage

### Custom Icon Component

```swift
import SwiftUI
import RefineIcons

struct CustomIcon: View {
    let name: String
    let size: CGFloat
    let color: Color
    let action: (() -> Void)?

    init(name: String, size: CGFloat = 24, color: Color = .primary, action: (() -> Void)? = nil) {
        self.name = name
        self.size = size
        self.color = color
        self.action = action
    }

    var body: some View {
        RefineUIIcon(name: name, size: size)
            .foregroundColor(color)
            .onTapGesture {
                action?()
            }
    }
}

// Usage
CustomIcon(name: "star", size: 32, color: .yellow) {
    print("Star tapped!")
}
```

### Icon with Animation

```swift
import SwiftUI
import RefineIcons

struct AnimatedIcon: View {
    @State private var isPressed = false

    var body: some View {
        RefineUIIcon(name: "heart", size: 24)
            .foregroundColor(isPressed ? .red : .gray)
            .scaleEffect(isPressed ? 1.2 : 1.0)
            .animation(.easeInOut(duration: 0.1), value: isPressed)
            .onTapGesture {
                isPressed.toggle()
            }
    }
}
```

### Dynamic Icon Selection

```swift
import SwiftUI
import RefineIcons

struct DynamicIcon: View {
    let iconType: IconType

    enum IconType {
        case home, search, settings, user

        var iconName: String {
            switch self {
            case .home: return "home"
            case .search: return "search"
            case .settings: return "settings"
            case .user: return "user"
            }
        }

        var color: Color {
            switch self {
            case .home: return .blue
            case .search: return .green
            case .settings: return .orange
            case .user: return .purple
            }
        }
    }

    var body: some View {
        RefineUIIcon(name: iconType.iconName, size: 24)
            .foregroundColor(iconType.color)
    }
}
```

## 🎯 Best Practices

### 1. **Performance Optimization**

- Use consistent icon sizes throughout your app
- Cache icon views when possible
- Use `@State` for dynamic icon changes

```swift
struct OptimizedIconView: View {
    @State private var iconName = "home"

    var body: some View {
        RefineUIIcon(name: iconName, size: 24)
            .onAppear {
                // Load icon asynchronously if needed
            }
    }
}
```

### 2. **Accessibility**

```swift
import SwiftUI
import RefineIcons

struct AccessibleIcon: View {
    var body: some View {
        RefineUIIcon(name: "search", size: 24)
            .accessibilityLabel("Search")
            .accessibilityHint("Double tap to search")
            .accessibilityAddTraits(.isButton)
    }
}
```

### 3. **Theme Integration**

```swift
import SwiftUI
import RefineIcons

struct ThemedIcon: View {
    @Environment(\.colorScheme) var colorScheme

    var body: some View {
        RefineUIIcon(name: "settings", size: 24)
            .foregroundColor(colorScheme == .dark ? .white : .black)
    }
}
```

### 4. **Responsive Design**

```swift
import SwiftUI
import RefineIcons

struct ResponsiveIcon: View {
    @Environment(\.horizontalSizeClass) var horizontalSizeClass

    var body: some View {
        let iconSize: CGFloat = horizontalSizeClass == .compact ? 20 : 24

        RefineUIIcon(name: "menu", size: iconSize)
    }
}
```

## 📱 Platform-Specific Features

### SF Symbols Integration

```swift
import SwiftUI
import RefineIcons

struct SFSymbolsIcon: View {
    var body: some View {
        // Use RefineUI icons alongside SF Symbols
        HStack {
            RefineUIIcon(name: "home", size: 24)
            Image(systemName: "house.fill")
                .font(.system(size: 24))
        }
    }
}
```

### iOS 14+ Features

```swift
import SwiftUI
import RefineIcons

struct ModernIcon: View {
    var body: some View {
        RefineUIIcon(name: "heart", size: 24)
            .foregroundColor(.red)
            .background(
                Circle()
                    .fill(Color.red.opacity(0.1))
                    .frame(width: 40, height: 40)
            )
    }
}
```

## 🎨 Styling Examples

### Navigation Bar Icons

```swift
import SwiftUI
import RefineIcons

struct NavigationBar: View {
    var body: some View {
        HStack {
            RefineUIIcon(name: "menu", size: 24)
                .foregroundColor(.primary)

            Spacer()

            HStack(spacing: 20) {
                RefineUIIcon(name: "search", size: 20)
                    .foregroundColor(.primary)

                RefineUIIcon(name: "notification", size: 20)
                    .foregroundColor(.primary)

                RefineUIIcon(name: "user", size: 20)
                    .foregroundColor(.primary)
            }
        }
        .padding()
        .background(Color(.systemBackground))
    }
}
```

### Button with Icon

```swift
import SwiftUI
import RefineIcons

struct IconButton: View {
    let iconName: String
    let title: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack {
                RefineUIIcon(name: iconName, size: 16)
                    .foregroundColor(.white)

                Text(title)
                    .foregroundColor(.white)
            }
            .padding()
            .background(Color.blue)
            .cornerRadius(8)
        }
    }
}

// Usage
IconButton(iconName: "download", title: "Download") {
    print("Download tapped!")
}
```

### Icon Grid

```swift
import SwiftUI
import RefineIcons

struct IconGrid: View {
    let icons = [
        ("home", "Home"),
        ("search", "Search"),
        ("settings", "Settings"),
        ("user", "User"),
        ("mail", "Mail"),
        ("phone", "Phone")
    ]

    let columns = [
        GridItem(.flexible()),
        GridItem(.flexible()),
        GridItem(.flexible())
    ]

    var body: some View {
        LazyVGrid(columns: columns, spacing: 16) {
            ForEach(icons, id: \.0) { icon in
                VStack {
                    RefineUIIcon(name: icon.0, size: 24)
                        .foregroundColor(.primary)

                    Text(icon.1)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(8)
            }
        }
        .padding()
    }
}
```

## 🔍 Icon Search and Discovery

### Finding Icons by Category

```swift
struct IconCategories {
    static let navigation = ["home", "search", "menu", "back", "forward"]
    static let actions = ["add", "edit", "delete", "save", "cancel"]
    static let communication = ["mail", "phone", "chat", "notification"]
    static let media = ["play", "pause", "stop", "volume", "camera"]
    static let system = ["settings", "gear", "user", "lock", "unlock"]
    static let files = ["folder", "file", "document", "image", "pdf"]
}
```

### Icon Search Function

```swift
func searchIcons(query: String) -> [String] {
    let allIcons = IconCategories.navigation +
                   IconCategories.actions +
                   IconCategories.communication +
                   IconCategories.media +
                   IconCategories.system +
                   IconCategories.files

    return allIcons.filter { icon in
        icon.lowercased().contains(query.lowercased())
    }
}

// Usage
let searchResults = searchIcons(query: "home")
// Returns: ["home"]
```

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

- 📧 Email: support@refineui.com
- 🐛 Issues: [GitHub Issues](https://github.com/refineui/system-icons/issues)
- 📖 Documentation: [docs.refineui.com](https://docs.refineui.com)
- 💬 Community: [Discord](https://discord.gg/refineui)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
