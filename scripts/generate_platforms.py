#!/usr/bin/env python3
"""RefineUI System Icons - Generate platform files (Android, iOS, Flutter, Web packages)."""
import sys
from pathlib import Path

from _lib import ROOT_DIR, SCRIPTS_DIR, run_command


def main():
    print("🌐 Platform file generation\n")
    if (ROOT_DIR / "android").exists():
        run_command(f"python3 {SCRIPTS_DIR}/generate_android_xml.py", "Android XML", required=False)
    if (ROOT_DIR / "ios").exists():
        run_command(f"python3 {SCRIPTS_DIR}/generate_ios_swift.py", "iOS Swift", required=False)
    if (ROOT_DIR / "flutter").exists():
        run_command(f"python3 {SCRIPTS_DIR}/generate_flutter_dart.py", "Flutter Dart", required=False)
    run_command(f"python3 {SCRIPTS_DIR}/generate_web_icons.py", "Web icon packages", required=False)
    print("🎉 Platform file generation completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
