#! /usr/bin/env bash

set -euxo pipefail

FRONTEND_DIRNAME=$(pwd)/frontend
BACKEND_DIRNAME=$(pwd)/backend

cd "${BACKEND_DIRNAME}"/api
source .venv/bin/activate
uvicorn main:app --host 0.0.0.0 --reload &

sleep 3

cd "${FRONTEND_DIRNAME}"
npm run dev
