#! /usr/bin/env bash

set -euxo pipefail

FRONTEND_DIRNAME=$(pwd)/frontend
BACKEND_DIRNAME=$(pwd)/backend

rm -rf ${localWorkspaceFolder}/.vscode-server/extensions
mkdir -p ${localWorkspaceFolder}/.vscode-server/extensions

rm -rf ${HOME}/.gitconfig
git config --global init.defaultBranch ${GIT_INIT_DEFAULT_BRANCH}
git config --global user.name ${GIT_USER_NAME}
git config --global user.email ${GIT_USER_EMAIL}

docker system prune -af --volumes

cd ${FRONTEND_DIRNAME}
rm -rf .nuxt .output node_modules
npm install -g npm-check-updates
npm install

cd ${BACKEND_DIRNAME}/api
find . -type d -name "__pycache__" -exec rm -rf {} +
find . -type f -name "*.pyc" -delete
pip3 install -r requirements.txt --break-system-packages
