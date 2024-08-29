// swift-tools-version: 5.10
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