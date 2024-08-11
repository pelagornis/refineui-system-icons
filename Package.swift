// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RefineIcons",
    products: [
        .library(
            name: "RefineIcons",
            targets: ["RefineIcons"]),
    ],
    targets: [
        .target(
            name: "RefineIcons",
            path: "ios/RefineIcons"
        )
    ]
)