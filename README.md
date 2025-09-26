vscode-inline-encrypt
==========

## Table of Contents
- [Introduction](#introduction)  
- [Sponsors](#sponsors)  
- [Documentation](#documentation)
  - [Installation](#installation)
    - [GPG Note](#gpg-note)
  - [Usage](#usage)
    - [Settings](#settings)
- [Versions](#versions)
- [License](#license)

---

![demo](assets/capture.gif)

&nbsp;

[Français](doc/README.FR.md), [English](README.md), [Español](doc/README.ES.md), [German](doc/README.DE.md), [Dutch](doc/README.NL.md), [简体中文](doc/README.CN.md), [繁體中文](doc/README.TW.md), [日本語](doc/README.JP.md)


# Introduction
`vscode-inline-encrypt` is a lightweight VSCode extension that lets you encrypt and decrypt text snippets without leaving your editor.  
It integrates with GnuPG (`gpg`) so you can reuse your existing key pairs and workflows.

Typical use cases:

- Hide API keys or sensitive passwords in a Markdown note.  
- Share encrypted snippets in Git repositories without exposing secrets.  
- Work on multiple machines while using the same GPG identity.  


## Sponsors
This is a community-driven project.  
If you find it useful and want to support its development, consider:  
-  :beers: [Support via PayPal](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
-  Submitting feedback and bug reports  
-  Sharing it  

[<img src="assets/don_paypal.png" width="50"/>](assets/don_paypal.png)  


---

# Documentation

## Installation

1. [Download](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) the `.vsix` package or install it directly from the marketplace.  
2. Make sure `gpg` is installed on your system (`gpg --version`). Set the path in the extension settings.  
3. Import or create a key pair before using the extension.  
4. Configure the key in the extension settings.  

### GPG Note
If you are completely new to `gpg`:  
```bash
# Generate a key pair
gpg --gen-key  
# List public keys
gpg --list-keys  
# List private keys
gpg --list-secret-keys 
# Export private key ⚠
gpg --export-secret-keys YOUR_ID > mykey.prk
# Export public key
gpg -a --export [id/name] > outputfile
# Import private key
gpg -a --import key.prk
gpg --edit-key youremail@example.com
>trust, 5, quit
# Import public key
gpg -a --import key.puk
````

PS: Some graphical tools allow you to perform these operations — feel free to use whichever works best for you.

## Usage

* Select some text, then run one of the following commands:

  * **Encrypt selection** (`inlineEncrypt.encrypt`)
  * **Decrypt selection** (`inlineEncrypt.decrypt`)
* (Optional) Create keyboard shortcuts for these commands.
  ![](assets/key_shortcut.jpg)

### Settings

You need to configure:

* `inlineEncrypt.gpgPath`: Path to your `gpg`.
* `inlineEncrypt.keyId`: Default key ID to use for encryption.

Example `settings.json`:

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```

# Versions

See [CHANGELOG.md](changelog.md) for version history.

# License

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>
