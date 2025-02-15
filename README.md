# Ishigami-Hills

Nuxt+FastAPIで開発する、アジカンの非公式ファンサイト。

## Commit Prefix

- add: ファイルを追加する
- remove: ファイルを削除する
- refactor: ファイルを更新/移動する
- revert: ファイルを過去の状態に戻す
- chore: ドキュメント、パッケージ等を追加/削除/更新/移動する

## 開発環境

### エディタ

Visual Studio Codeを使用する。  
DockerをインストールしたLinuxにSSHで接続し、開発コンテナを起動する。  
拡張機能の[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)をインストールすることで、VSCodeでSSHや開発コンテナを使用できるようになる。

### 開発コンテナ

Debianをベースに、GitやNode.js、Pythonをインストールしたイメージを使用する。

## 事前準備

- 開発コンテナで使用するdevcontainer.envを作成する

  .devcontainer/devcontainer.env

  ```env:.devcontainer/devcontainer.env
  GIT_INIT_DEFAULT_BRANCH=main
  GIT_USER_NAME=<GIT_USER_NAME>
  GIT_USER_EMAIL=<GIT_USER_EMAIL>
  ```

- フロントエンドで使用する.envを作成する

  frontend/.env

  ```env:frontend/.env
  NUXT_FAST_API_BASE_URL=<NUXT_FAST_API_BASE_URL>
  ```

- バックエンドで使用する.envを作成する

  backend/api/.env

  ```env:backend/api/.env
  FAST_API_HOST=<FAST_API_HOST>
  FAST_API_PORT=<FAST_API_PORT>
  ```
