---
title: Laptop Setup Guide
description: Instructions for setting up your local machine for development.
---

This guide walks through the setup process for your local development environment.

## Initial Setup

### Git

**Git** is essential for version control. Ensure you have the latest version by downloading it from \[here\](https://git-scm.com/downloads).

Verify the installation with:

```bash
git --version
```

#### Configuring Git

Set up your Git identity:

```bash
git config --global user.name "<your_username>"
git config --global user.email "username@email.com"
```

Check your settings:

```bash
git config user.name
git config user.email
```

#### SSH Key for GitHub

Generate a new SSH key

```bash
ssh-keygen -t rsa
```

Add the SSH key to your clipboard and add it in your GitHub account:

```bash
pbcopy < ~/.ssh/id_rsa.pub
```

### Homebrew

**Homebrew** is a free and open-source software package management system that simplifies the installation of software on Apple's macOS.

To install Homebrew run the following command in your terminal:

Homebrew installation:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Homebrew installation behind proxy:

```bash
/bin/bash -c "$(curl -vvv -x http://<USERNAME>:<PASSWORD>@proxy.com:<PORT> -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Verify the installation:

```bash
brew --version
```

You should see the following output:

```bash
Homebrew x.x.x
```

## IDE

[Intellij IDEA Ultimate](https://www.jetbrains.com/idea/) is my preferred IDE for development. You can download it from [here](https://www.jetbrains.com/idea/download/#section=mac).

[VSCode](https://code.visualstudio.com/) is my preferred code editor for quick edits (For now...Quickly being replaced by [Zed](https://zed.dev/)). You can download VSCode from [here](https://code.visualstudio.com/download).

Alternatively, use Homebrew to install them on macOS (Preferred):

```bash
brew install --cask intellij-idea
brew install --cask visual-studio-code
```

## MacOS

### Xcode Command Line Tools

:::note
This is an optional step, Homebrew will install the latest version of Xcode Command Line Tools during initial installation.
:::

**Xcode Command Line Tools** includes a GCC compiler, linker, and other utilities. Many useful tools are included in the Xcode Command Line Tools, such as Git, which are not included in the macOS by default.

To install the Xcode Command Line Tools, run the following command in your terminal:

```bash
xcode-select --install
```

verify the installation:

```bash
xcode-select -p
```

You should see the following output:

```bash
/Library/Developer/CommandLineTools
```

### Kitty

**Kitty** is a fast, featureful, GPU based terminal emulator. It offloads rendering to the GPU and uses OpenGL for fast, cross-platform performance on modern hardware.

To install Kitty run the following command in your terminal:

```bash
brew install --cask kitty
```

#### Preferred Theme

[Rasmus]("https://github.com/kvrohit/rasmus.nvim/blob/main/extras/kitty/rasmus.conf") theme for Kitty.

Go to `~/.config/kitty` and create a file named `current-theme.conf` and paste the following content in it:

```bash
# Rasmus colorscheme for kitty
cursor #b6b6b5
foreground #d1d1d1
background #1a1a19
selection_foreground #d1d1d1
selection_background #2a2a29
color0  #333332
color8  #4c4c4b
color1  #ff968c
color9  #ffafa5
color2  #61957f
color10 #7aae98
color3  #ffc591
color11 #ffdeaa
color4  #8db4d4
color12 #a6cded
color5  #de9bc8
color13 #f7b4e1
color6  #7bb099
color14 #94c9b2
color7  #d1d1d1
color15 #eaeaea

active_tab_foreground   #d1d1d1
active_tab_background   #323231
inactive_tab_foreground #b6b6b5
inactive_tab_background #222221

active_border_color   #3a3a39
inactive_border_color #323231
inactive_text_alpha   0.8
```

### Auto-Suggestions

For auto-suggestions in the terminal my preferred choice is [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions).

To install zsh-autosuggestions run the following command in your terminal:

```bash
brew install zsh-autosuggestions
```

To activate the autosuggestions, add the following at the end of your `.zshrc`:

```bash
source $HOMEBREW_PREFIX/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

You will also need to restart your terminal for this change to take effect.

### VIM

**Vim** is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.
I prefer to keep things simple and use the default vim that comes with MacOS with some minor tweaks.

Add the following to your `.vimrc` file:

```vim
syntax on

set number

set relativenumber

set autoindent

set smartindent

set smarttab

set expandtab

set hlsearch

nnoremap <SPACE> <Nop>

let mapleader=" "

set encoding=UTF-8

set wrap

set nocompatible

set laststatus=2

" PLUGINS
call plug#begin()
  Plug 'preservim/nerdtree'
  Plug 'https://github.com/dracula/vim.git'
  Plug 'ryanoasis/vim-devicons'
  Plug 'ayu-theme/ayu-vim'
call plug#end()

set termguicolors
let ayucolor="dark"
colorscheme ayu

nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>
```

Run `:PlugInstall` to install the plugins.

:::note
`:PlugInstall` requires `vim-plug` to be installed, to install it run the following command in your terminal:

```shell
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

:::

### Alfred

**Alfred** is a powerful productivity tool for macOS, designed to boost your efficiency with hotkeys, keywords, and file actions. With its unique workflows, Alfred offers a seamless way to search for files online and on your Mac, browse your file system, and much more.

To install Alfred run the following command in your terminal (provided that homebrew is installed):

```bash
brew install --cask alfred
```

Follow the prompts to provided in the alfred installer to complete the installation.

### Clipy

**Clipy** is a clipboard extension app for macOS. It extends the native clipboard functionality by remembering every item you copy, allowing you to quickly access any of those items at a later time. With its snippets feature, you can also save frequently used phrases and access them with ease.

To install Clipy run the following command in your terminal (provided that homebrew is installed):

```bash
brew install --cask clipy
```

### Arc

**Arc** is a web browser that stands out for its integration of web browsing with built-in applications and features, enhancing user interaction with the internet.

To install Arc using `homebrew`

```bash
brew install --cask arc
```

### Starship

**Starship** is a Rust based customizable cross-shell prompt. Brings the best-in-class speed and safety of Rust, to make your prompt as quick and reliable as possible.

To install starship using `homebrew`

```bash
brew install starship
```

#### Preferred Starship Config

In `~/.config/starship.toml` add:

```bash
"$schema" = 'https://starship.rs/config-schema.json'

add_newline = true

[character]
success_symbol = '[➜](bold green)'
error_symbol = '[✗](bold red) '

[package]
disabled = true

[aws]
format = 'on [$symbol($profile )(\($region\) )]($style)'
style = 'bold blue'
symbol = '🅰 '
```

### Zed

**Zed** is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter. Zed combines the power of an IDE with the responsiveness of a lightweight editor.

To install Zed using `homebrew`

```bash
brew install zed
```

#### Preferred Zed Config

In `~/.config/zed/settings.json` add:

```bash
{
  "theme": "Ayu Dark",
  "ui_font_size": 14,
  "buffer_font_size": 14,
  "format_on_save": "language_server",
  "autosave": "on_focus_change"
}
```

---

## Work In Progress...

### Windows

#### Scoop

Scoop is a command-line installer for Windows inspired by Homebrew for macOS. It focuses on simplifying the installation of software and development tools without the need for elevated permissions.

To install Scoop, you first need to ensure that you have PowerShell 3 (or later) and .NET Framework 4.5 (or later) installed on your Windows machine.

To install Scoop, run the following command in your PowerShell:

Install without proxy:

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser; iwr -useb get.scoop.sh | iex
```

Install behind proxy:

```powershell
$proxy = "http://<USERNAME>:<PASSWORD>@proxy.com:<PORT>"
Set-ExecutionPolicy RemoteSigned -scope CurrentUser; iwr -useb get.scoop.sh -Proxy $proxy | iex
```

Verify the installation:

```powershell
scoop --version
```

You should see the following output:

```bash
Scoop x.x.x
```

#### Hyper

Hyper is a sleek and modern terminal built on web technologies. It's fully extensible and customizable, making it a great choice for developers looking for an advanced terminal experience on Windows. You can learn more about Hyper by visiting its [homepage](https://hyper.is/).

#### Installation steps

1. **Ensure Scoop is Installed**

2. **Install Hyper**

   With Scoop installed, you can now install Hyper with the following command:

   ```powershell
   scoop install hyper
   ```

3. **Launch Hyper**

   After installation, you can launch Hyper by typing `hyper` into your command prompt or searching for "Hyper" in your start menu.

4. **Optional Customizations**

   Hyper allows for a wide range of customizations, from themes to plugins. You can modify the `.hyper.js` configuration file in your home directory to tweak the settings to your liking.
