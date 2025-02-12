#! /usr/bin/env bash

set -euxo pipefail

docker compose -f compose.dev.yml up --force-recreate
docker system prune -af --volumes
