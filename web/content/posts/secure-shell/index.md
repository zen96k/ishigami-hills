+++
date = '2025-11-03T01:00:00+09:00'
title = 'Secure Shell'
featureimage = 'https://blowfish.page/img/blowfish_logo_transparent.png'
categories = ['Memo']
tags = ['Secure Shell', 'SSH']
+++

## リモートマシン

### /etc/ssh/sshd_config.d/server.conf

```conf:server.conf
AllowUsers <ユーザー名>
PasswordAuthentication no
PermitRootLogin no
Port <ポート番号>
UsePAM yes

Subsystem sftp /usr/lib/openssh/sftp-server
```

## ホストマシン

### ${HOME}/.ssh/config

```config:config
Host <マシン名>
    HostName <ホスト名 | IPアドレス>
    User <ユーザー名>
    PasswordAuthentication no
    IdentityFile <秘密鍵のパス>
    IdentitiesOnly yes
    Port <ポート番号>
```
