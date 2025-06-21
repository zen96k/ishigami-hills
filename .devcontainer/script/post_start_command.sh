#! /usr/bin/env bash

set -euxo pipefail

PROJECT_ROOT_PATH=$(pwd)

docker system prune -af --volumes
docker compose up -d

rm -rf ${HOME}/.gitconfig
git config --global init.defaultBranch ${GIT_INIT_DEFAULT_BRANCH}
git config --global user.name ${GIT_USER_NAME}
git config --global user.email ${GIT_USER_EMAIL}

cd ${PROJECT_ROOT_PATH}/web
rm -rf public resources .hugo_build.lock
