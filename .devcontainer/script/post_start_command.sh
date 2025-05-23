#! /usr/bin/env bash

set -euxo pipefail

FRONTEND_DIRNAME="$(pwd)"/frontend
BACKEND_DIRNAME="$(pwd)"/backend

rm -rf "${HOME}"/.gitconfig
git config --global init.defaultBranch "${GIT_INIT_DEFAULT_BRANCH}"
git config --global user.name "${GIT_USER_NAME}"
git config --global user.email "${GIT_USER_EMAIL}"

apt update && apt -y install zsh
sh -c "$(curl -fsSL https://install.ohmyz.sh)" "" --unattended
chsh -s "$(which zsh)"
cp -rfv .zshrc "${HOME}"

npm install -g npm-check-updates@latest
pipx install uv

apt update && apt -y install shellcheck
go install mvdan.cc/sh/v3/cmd/shfmt@latest

cd "${FRONTEND_DIRNAME}"
rm -rf .nuxt .output dist node_modules
npm install

cd "${BACKEND_DIRNAME}"/api
find . -type d -name "__pycache__" -exec rm -rf {} +
find . -type f -name "*.pyc" -delete
rm -rf .venv
uv sync
