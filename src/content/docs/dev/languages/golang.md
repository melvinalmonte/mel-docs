---
title: Golang
description: How to setup your local machine for Golang development.
--- 
## Golang Development Environment Setup

Setting up a Golang environment is easy and can be done in a matter of minutes. Depending on your operating system, follow the instructions below:

### MacOS (using Homebrew)

1. **Install Homebrew** (if you haven't already...Just go [here](/dev/laptop#homebrew) for instructions

2. **Install Go**

   With Homebrew installed, you can now install Go:

   ```bash
   brew install go
   ```

3. **Verify Installation**

   To ensure Go is installed correctly:

   ```bash
   go version
   ```

   This should display the version of Go that you installed.

4. **Setup Go Workspace**

   While newer versions of Go do not strictly require you to have a GOPATH, it's still a good practice to have one. You can set it up as:

   ```bash
   echo 'export GOPATH=$HOME/go' >> ~/.zshrc
   echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.zshrc
   source ~/.zshrc
   ```

   Note: If you're using bash instead of zsh, replace `.zshrc` with `.bash_profile`.

### Windows (using Scoop)

1. **Install Scoop** (if you haven't already)

   Open a PowerShell window and run:

   ```powershell
   Set-ExecutionPolicy RemoteSigned -scope CurrentUser
   iwr -useb get.scoop.sh | iex
   ```

2. **Add the "extras" bucket** (if you haven't already)

   The `extras` bucket contains the Go app manifest and other useful software:

   ```powershell
   coop bucket add extras
   ```

3. **Install Go**

   Now you can install Go using Scoop:

   ```powershell
   scoop install go
   ```

4. **Verify Installation**

   To ensure Go is installed correctly:

   ```powershell
   go version
   ```

   This should display the version of Go that you installed.

5. **Setup Go Workspace**

   Although Go modules have made GOPATH less necessary, you might still want to set it:

   ```powershell
   $env:GOPATH = "$HOME\go"
   [System.Environment]::SetEnvironmentVariable('GOPATH', $env:GOPATH, [System.EnvironmentVariableTarget]::User)
   [System.Environment]::SetEnvironmentVariable('PATH', $env:PATH + ";$env:GOPATH\bin", [System.EnvironmentVariableTarget]::User)
   ```

## Configuring Go

When setting up your Go environment, there are various environment variables you can set to influence the behavior of Go tools. Below is a table describing the primary environment variables and their intended use:

| Name         | Value | Function |
|--------------|-------|----------|
| `CGO_ENABLED`| `0`    | Disables the `cgo` command to reduce possible attack vectors (e.g. CVE-2020-28366 and CVE-2020-28367) which may be exploited by external modules. |
| `GO_PRIVATE` | (your value i.e. `yourrepo.internal.com/*`) | Comma-separated list of glob patterns (in the syntax of Go's `path.Match`) of module path prefixes that should always be fetched directly from their origin and never through a proxy. |
| `GOPROXY`    | (your value: i.e. Your internal nexus `https://nexus.internal/read-go`) | A comma-separated list of proxy URLs checked in sequence. This is used to download modules and verify their checksums. |
| `GOSUMDB`    | (your value: i.e. `sum.golang.org https://nexus.internal/raw-read-go-sum`) | Indicates which checksum database to use. This can be set to `off` to disable the database check entirely. |
| `GOVCS`      | (your value: i.e. `*:off`) | Configures which version control systems are allowed for which module path patterns. |
| `no_proxy`   | (your value: i.e: `.foo.bar.com,.foo.internal`) | Comma-separated list of domain names or IP addresses that shouldn't use a proxy. Useful for local development or private repositories. |
