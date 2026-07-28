#!/bin/sh
# Bootstrap script — sets up repository for AI agent development
# This script is idempotent. Running it multiple times is safe.

set -e

echo "Bootstrapping repository..."
echo ""

# Configure git hooks
git config core.hooksPath .githooks
echo "OK: Git hooks configured"

# Verify hooks exist and are executable
for hook in pre-commit commit-msg pre-push pre-merge-commit; do
  if [ ! -f ".githooks/$hook" ]; then
    echo "ERROR: Missing hook: .githooks/$hook"
    exit 1
  fi
  chmod +x ".githooks/$hook" 2>/dev/null || true
done
echo "OK: Hooks verified and executable"

# Configure push-master alias
git config alias.push-master '!ALLOW_PROTECTED_BRANCH_PUSH=1 git push'
echo "OK: push-master alias configured"

# Verify core.hooksPath
CURRENT_PATH=$(git config core.hooksPath)
if [ "$CURRENT_PATH" != ".githooks" ]; then
  echo "ERROR: core.hooksPath is '$CURRENT_PATH', expected '.githooks'"
  exit 1
fi
echo "OK: core.hooksPath verified"

# Verify protected branch documentation
echo ""
echo "==================================="
echo "Bootstrap Complete"
echo "==================================="
echo ""
echo "Hooks installed:"
echo "  pre-commit       — file size, secrets detection"
echo "  commit-msg       — conventional commit validation"
echo "  pre-push         — branch protection"
echo "  pre-merge-commit — conflict detection"
echo ""
echo "Protected branches: master, main, trunk, production, release"
echo "Override: git push-master"
echo ""
echo "Repository ready."
