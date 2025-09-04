// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "RefineIcons",
    platforms: [
        .iOS(.v13),
        .macOS(.v12)
    ],
    products: [
        .library(
            name: "RefineIcons",
            targets: ["RefineIcons"]
        )
    ],
    targets: [
        .target(
            name: "RefineIcons",
            resources: [
                .process("Resources")
            ]
        )
    ]
)
