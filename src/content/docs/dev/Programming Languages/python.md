---
title: Python
description: How to setup your local machine for python development.
--- 

Setting up a flexible Python development environment is crucial, especially when working with projects that may require different Python versions. Instead of manually installing different Python versions, we recommend using `pyenv`, which allows for easy installation and management of multiple Python versions.

## macOS Setup

1. **Install Homebrew** (if you haven't already...Just go [here](/dev/laptop#homebrew)) for instructions

2. Install pyenv using Homebrew

    Once Homebrew is installed, you can install `pyenv`:

    ```bash
    brew install pyenv
    ```

3. Configure pyenv

    Add the following to your shell profile (`~/.bash_profile`, `~/.zshrc`, etc.):

    ```bash
    if command -v pyenv 1>/dev/null 2>&1; then
    eval "$(pyenv init --path)"
    fi
    ```

    Then, restart your terminal or run `source ~/.bash_profile` (or your respective shell profile file).

4. Install Python using pyenv

    With `pyenv` configured, you can install any Python version. For example, to install Python 3.9.1:

    ```bash
    pyenv install 3.9.1
    ```

## Windows Setup

:::note

For Windows, there isn't a direct equivalent to `pyenv`. Instead, we recommend using the official Python installer for Windows, or using Windows Subsystem for Linux (WSL) to set up a Linux-like environment on your Windows machine and then following the macOS instructions for `pyenv`.

:::

---

## Common pyenv Commands

### Listing Installed Python Versions

To see a list of Python versions you have installed:

```bash
pyenv versions
```

### Switching Between Python Versions

If you've installed multiple Python versions, you can easily switch between them:

```bash
pyenv global [version]
```

Replace `[version]` with the desired version number, e.g., `pyenv global 3.9.1`.

### Setting a Local Python Version

To set a Python version for a specific project directory:

```bash
pyenv local [version]
```
