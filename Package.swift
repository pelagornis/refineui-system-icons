import PackageDescription

let package = Package(
    name: "RefineIcons",
    platforms: [
        .iOS(.v13),
        .macOS(.v10_15)
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
            path: "ios/RefineIcons/Sources",
            resources: [
                .process("ios/RefineIcons/Resources")
            ]
        )
    ]
)
