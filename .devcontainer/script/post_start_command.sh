#! /usr/bin/env bash

set -euxo pipefail

# PROJECT_ROOT_PATH=$(pwd)

docker system prune -af --volumes
docker compose up -d

rm -rf ${HOME}/.gitconfig
git config --global init.defaultBranch ${GIT_INIT_DEFAULT_BRANCH}
git config --global user.name ${GIT_USER_NAME}
git config --global user.email ${GIT_USER_EMAIL}

npm install -g npm-check-updates

# cd ${PROJECT_ROOT_PATH}/web
# rm -rf .output .data .nuxt .nitro .cache dist
# npm install
