#! /usr/bin/env bash

set -euxo pipefail

FRONTEND_DIRNAME=$(pwd)/frontend
BACKEND_DIRNAME=$(pwd)/backend

rm -rf ${HOME}/.gitconfig
git config --global init.defaultBranch ${GIT_INIT_DEFAULT_BRANCH}
git config --global user.name ${GIT_USER_NAME}
git config --global user.email ${GIT_USER_EMAIL}

cd ${FRONTEND_DIRNAME}
npm install -g npm-check-updates
npm install

cd ${BACKEND_DIRNAME}/api
pip3 install -r requirements.txt --break-system-packages
