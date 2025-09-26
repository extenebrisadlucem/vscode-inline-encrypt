vscode-inline-encrypt
==========

## Table of Contents  
- [Introduction](README.md#Introduction)  
- [Sponsors](README.md#Sponsors)  
- [Documentation](README.md#documentation)
  - [Installation](README.md#installation)
  - [Usage](README.md#usage)
    - [Settings](README.md#settings)
- [Changelog](README.md#changelog)
- [Licence](README.md#licence)

---

![demo](assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](zh-cn) , [繁體中文](zh-tw) , [日本語](ja-jp)


# Introduction
`vscode-inline-encrypt` is a lightweight VSCode extension that lets you **encrypt** and **decrypt** snippets of text without leaving your editor.  
It integrates with GnuPG (`gpg`) so you can reuse your existing keypairs and workflows.

Typical use cases:
- Hide sensitive API keys or passwords in a Markdown note.  
- Share encrypted snippets in Git repositories without exposing secrets.  
- Work across multiple machines while using the same GPG identity.

## Sponsors
This project is community-driven.  
If you find it useful and want to support further development, consider:
- :beers: [Support via PayPal](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)
- Submitting PRs and improvements
- Sharing feedback via GitHub Issues

[<img src="assets/don_paypal.png" width="50"/>](assets/don_paypal.png)  


---

# Documentation

## Installation
1. Download the `.vsix` package or install directly from the marketplace.  
2. Ensure you have `gpg` installed on your system (`gpg --version`).  
3. Import or create a keypair before using the extension.  

## Usage
- Select some text, then run the command:  
  - **Encrypt selection** (`inlineEncrypt.encrypt`)  
  - **Decrypt selection** (`inlineEncrypt.decrypt`)  
- Optional: bind them to custom keyboard shortcuts.  

### Settings
You must configure:
- `inlineEncrypt.gpgPath`: Path to your `gpg` binary.  
- `inlineEncrypt.keyId`: Default key ID to use for encryption.  

Example in `settings.json`:
```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```

# Changelog
See [CHANGELOG.md](changelog.md) for version history.


# Licence
CC-BY-NC-SA -> https://creativecommons.org/licenses/by-nc-sa/4.0/

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Licence Creative Commons" style="border-width:0" src="Cc-by-nc-sa_icon.png" /></a>





<br><br><br>
<sub><small>ON7AUR - CC-BY-NC-SA ®</small></H4>