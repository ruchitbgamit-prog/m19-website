#!/usr/bin/env bash
# One-time setup: log in to GitHub, create the remote repo, and push.
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="ruchitbgamit-prog/m19-website"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub (browser will open)..."
  gh auth login -h github.com -p https -w
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote origin already set."
else
  git remote add origin "https://github.com/${REPO}.git"
fi

if gh repo view "${REPO}" >/dev/null 2>&1; then
  echo "Repository exists. Pushing..."
else
  echo "Creating repository ${REPO}..."
  gh repo create m19-website --public \
    --description "M19 Material Intelligence marketing site (React + Vite)" \
    || true
fi

git push -u origin main

echo "Done: https://github.com/${REPO}"
