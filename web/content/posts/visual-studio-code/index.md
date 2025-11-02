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
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "editor.fontFamily": "BIZ UDGothic",
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.renderWhitespace": "all",
  "editor.tabSize": 2,
  "diffEditor.ignoreTrimWhitespace": false,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "git.postCommitCommand": "push",
  "remote.autoForwardPorts": false,
  "security.workspace.trust.enabled": false,
  "terminal.integrated.defaultProfile.linux": "zsh",
  "terminal.integrated.fontSize": 14,
  "workbench.secondarySideBar.showLabels": false
}
```

### devcontainer.json

```json:devcontainer.json
{
  "name": "ishigami-hills",
  "image": "ubuntu",
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {},
    "ghcr.io/devcontainers/features/go:1": {},
    "ghcr.io/devcontainers/features/hugo:1": {}
  },
  "runArgs": ["--env-file", ".devcontainer/devcontainer.env", "--rm"],
  "appPort": [1313],
  "forwardPorts": [1313],
  "containerEnv": { "TZ": "Asia/Tokyo" },
  "customizations": {
    "vscode": {
      "extensions": [
        "bierner.markdown-preview-github-styles",
        "Codeium.codeium",
        "Continue.continue",
        "eamodio.gitlens",
        "esbenp.prettier-vscode",
        "ms-azuretools.vscode-docker",
        "MS-CEINTL.vscode-language-pack-ja",
        "ms-vscode.cpptools-themes",
        "mutantdino.resourcemonitor",
        "vscode-icons-team.vscode-icons"
      ],
      "settings": {
        "continue.telemetryEnabled": false,
        "editor.autoClosingBrackets": "always",
        "editor.autoClosingQuotes": "always",
        "editor.fontFamily": "BIZ UDGothic",
        "editor.fontSize": 14,
        "editor.formatOnSave": true,
        "editor.renderWhitespace": "all",
        "editor.tabSize": 2,
        "diffEditor.ignoreTrimWhitespace": false,
        "files.insertFinalNewline": true,
        "files.trimFinalNewlines": true,
        "files.trimTrailingWhitespace": true,
        "git.postCommitCommand": "push",
        "terminal.integrated.defaultProfile.linux": "zsh",
        "terminal.integrated.fontSize": 14,
        "workbench.colorTheme": "Visual Studio Dark - C++",
        "workbench.iconTheme": "vscode-icons",
        "workbench.secondarySideBar.showLabels": false,
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
        "[yml]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[yaml]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
      }
    }
  },
  "onCreateCommand": "bash .devcontainer/script/on_create_command.sh",
  "postStartCommand": "bash .devcontainer/script/post_start_command.sh",
  "postAttachCommand": "bash .devcontainer/script/post_attach_command.sh",
  "waitFor": "onCreateCommand"
}
```
