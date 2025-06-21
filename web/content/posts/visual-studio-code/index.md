+++
date = '2025-06-22T02:04:10+09:00'
title = 'Visual Studio Code'
featureimage = 'https://blowfish.page/img/blowfish_logo_transparent.png'
categories = ['Memo']
tags = ['Visual Studio Code', '開発コンテナ']
+++

## Visual Studio Code

### settings.json

```json:settings.json
{
  "workbench.colorTheme": "GitHub Dark",
  "remote.autoForwardPorts": false,
  "security.workspace.trust.enabled": false,
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "editor.tabSize": 2,
  "editor.fontSize": 16,
  "editor.fontFamily": "BIZ UDGothic",
  "editor.renderWhitespace": "all",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "terminal.integrated.defaultProfile.linux": "zsh",
  "terminal.integrated.fontSize": 16,
  "dev.containers.cacheVolume": false,
  "dev.containers.copyGitConfig": false
}
```

## 開発コンテナ

### devcontainer.json

```json:devcontainer.json
{
  "name": "ishigami-hills",
  "image": "debian",
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {},
    "ghcr.io/devcontainers/features/git:1": {},
    "ghcr.io/devcontainers/features/hugo:1": {}
  },
  "runArgs": ["--env-file", ".devcontainer/devcontainer.env", "--rm"],
  "forwardPorts": [1313],
  "containerEnv": { "TZ": "Asia/Tokyo" },
  "customizations": {
    "vscode": {
      "extensions": [
        "Codeium.codeium",
        "Continue.continue",
        "ms-azuretools.vscode-docker",
        "eamodio.gitlens",
        "MS-CEINTL.vscode-language-pack-ja",
        "adpyke.codesnap",
        "bierner.markdown-preview-github-styles",
        "mutantdino.resourcemonitor",
        "esbenp.prettier-vscode"
      ]
    }
  },
  "onCreateCommand": "bash .devcontainer/script/on_create_command.sh",
  "postStartCommand": "bash .devcontainer/script/post_start_command.sh",
  "postAttachCommand": "bash .devcontainer/script/post_attach_command.sh",
  "waitFor": "onCreateCommand"
}
```

### settings.json

```json:settings.json
{
  "continue.telemetryEnabled": false,
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "editor.tabSize": 2,
  "editor.fontSize": 16,
  "editor.fontFamily": "BIZ UDGothic",
  "editor.formatOnSave": true,
  "editor.renderWhitespace": "all",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "terminal.integrated.defaultProfile.linux": "zsh",
  "terminal.integrated.fontSize": 16,
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "files.trimTrailingWhitespace": false
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
