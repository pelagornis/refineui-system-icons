#!/usr/bin/env python3
"""RefineUI System Icons - Build platform projects (React Native, Flutter, iOS, Android, web)."""
import sys

from _lib import ROOT_DIR, run_command


def main():
    print("🌐 Platform builds\n")
    if (ROOT_DIR / "packages" / "react-native-icons").exists():
        run_command("cd packages/react-native-icons && npm run build", "React Native icons", required=False)
    if (ROOT_DIR / "flutter").exists():
        run_command("cd flutter && flutter build", "Flutter", required=False)
    if (ROOT_DIR / "ios").exists():
        run_command("cd ios && pod install", "iOS Pods", required=False)
    if (ROOT_DIR / "android").exists():
        run_command("cd android && ./gradlew build", "Android", required=False)
    if (ROOT_DIR / "web").exists():
        run_command("cd web && npm run build", "Web playground", required=False)
    print("🎉 Platform builds completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
