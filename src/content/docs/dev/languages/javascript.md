---
title: Javascript
description: How to setup your local machine for Javascript development.
---

To streamline your JavaScript development, it's crucial to have Node.js and npm (Node Package Manager) installed. Instead of manually installing different Node.js versions and switching between them, we recommend using `nvm` (Node Version Manager) which allows for easy installation and management of multiple Node.js versions.

### macOS Setup

1. **Install Homebrew** (if you haven't already...Just go [here](/dev/laptop#homebrew)) for instructions

2. **Install nvm using Homebrew**
   With Homebrew installed, you can now install `NVM`:

    ```bash
    brew install nvm
    ```

3. **Configure nvm**

    Add the following to your shell profile (`~/.bash_profile`, `~/.zshrc`, etc.):

    ```bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
    [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"
    ```

    Then, restart your terminal or run `source ~/.bash_profile` (or your respective shell profile file).

4. **Install Node.js using nvm**

    With `nvm` configured, you can install the latest version of Node.js:

    ```bash
    nvm install node
    ```

### Windows Setup

1. **Install Scoop** (if not installed... Just go [here](/dev/laptop#scoop) for instructions)

2. **Install `nvm` using Scoop**

    With Scoop installed, you can install `nvm`:

    ```powershell
    scoop install nvm
    ```

3. **Install Node.js using nvm**

    With `nvm` installed, you can install the latest version of Node.js:

    ```powershell
    nvm install latest
    ```

---

## Common nvm Actions

Once you've set up `nvm`, you have access to a variety of commands that help manage your Node.js versions. Below are some basic actions to get you started:

### Listing Installed Node Versions

To see a list of Node.js versions you have installed:

```bash
nvm list
```

### Switching Between Node Versions

If you've installed multiple versions of Node.js, you can easily switch between them:

```bash
nvm use [version]
```

Replace `[version]` with the desired version number, e.g., `nvm use stable`.

### Setting a Default Node Version (macOS only)

On macOS, you can set a default Node.js version that will be used in any new shell:

```bash
nvm alias default [version]
```

Replace `[version]` with your preferred version number, e.g., `nvm alias default stable`.

:::caution
The `nvm alias default` command is not available in the Windows environment.
:::
