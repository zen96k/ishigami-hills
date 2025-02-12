#! /usr/bin/env bash

set -euxo pipefail

docker system prune -af --volumes
docker compose -f compose.base.yml -f compose.production.yml up -d --force-recreate
