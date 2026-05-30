#!/usr/bin/env python3
"""Generate iOS font icon code and asset catalog from icon-mapping.json + assets."""
import sys

from _lib import SCRIPTS_DIR, run_command


def main():
    print("🍎 iOS generation\n")
    run_command(
        f"python3 {SCRIPTS_DIR}/generate_font_platform_icons.py",
        "iOS font icon constants",
    )
    run_command(
        f"python3 {SCRIPTS_DIR}/generate_ios_assets.py",
        "iOS asset catalog",
    )
    print("🎉 iOS generation completed!")
    return 0


if __name__ == "__main__":
    sys.exit(main())
