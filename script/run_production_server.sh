#! /usr/bin/env bash

set -euxo pipefail

BACKEND_DIRNAME=$(pwd)/backend

cd "${BACKEND_DIRNAME}"/api
docker compose up -d --force-recreate --remove-orphans
