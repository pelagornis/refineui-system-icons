// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "RefineUIIcons",
    platforms: [
        .iOS(.v13),
        .macOS(.v10_15)
    ],
    products: [
        .library(
            name: "RefineUIIcons",
            targets: ["RefineUIIcons"]
        )
    ],
    targets: [
        .target(
            name: "RefineUIIcons",
            path: "ios",
            sources: ["Sources"],
            resources: [
                .process("Resources")
            ]
        )
    ]
)
