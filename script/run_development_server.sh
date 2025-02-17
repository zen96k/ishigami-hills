#! /usr/bin/env bash

set -euxo pipefail

FRONTEND_DIRNAME=$(pwd)/frontend
BACKEND_DIRNAME=$(pwd)/backend

cd "${BACKEND_DIRNAME}"/api
uvicorn main:app --reload &

cd "${FRONTEND_DIRNAME}"
npm run dev
