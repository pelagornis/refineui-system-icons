# RefineIcons

![Official](https://img.shields.io/badge/project-official-green.svg?colorA=303033&colorB=226af6&label=Pelagornis)
[![License](https://img.shields.io/github/license/pelagornis/refineui-system-icons)](https://github.com/pelagornis/refineui-system-icons/blob/main/LICENSE)
![Platform](https://img.shields.io/badge/platforms-iOS%2013.0%7C%20macOS%2012.0-red.svg)

## Requirements

- iOS 13.0+ / macOS 12.0+
- Xcode 15.0+
- Swift 5.10+

## Installation

#### Using Swift Package Manager

RefineIcons was deployed as Swift Package Manager. Package to install in a project. Add as a dependent item within the swift manifest.

```swift
let package = Package(
    ...
    dependencies: [
        .package(url: "https://github.com/pelagornis/refineui-system-icons.git", from: "vTag")
    ],
    ...
)
```

#### Using CocoaPods

To get set up with CocoaPods visit their [getting started guide](https://guides.cocoapods.org/using/getting-started.html).

To integrate RefineIcons into your Xcode project using CocoaPods, specify it in your Podfile:

```ruby
pod 'RefineIcons', '~> 1.0.0'
```
