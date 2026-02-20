"""Shared helpers for RefineUI System Icons scripts."""
import subprocess
import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = Path(__file__).resolve().parent


def run_command(command, description=None, cwd=None, required=True):
    """Run a shell command. Return True on success, False on failure."""
    if description:
        print(f"🚀 {description}...")
    try:
        subprocess.run(
            command,
            shell=True,
            cwd=cwd or ROOT_DIR,
            check=True,
            capture_output=True,
            text=True,
        )
        if description:
            print(f"✅ {description} completed")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {'Command' if not description else description} failed: {e}")
        if e.stderr:
            print(e.stderr)
        if required:
            sys.exit(1)
        return False
