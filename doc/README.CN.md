vscode-inline-encrypt
==========

## 目录
- [介绍](#介绍)  
- [赞助](#赞助)  
- [文档](#文档)
  - [安装](#安装)
    - [GPG 说明](#gpg-说明)
  - [使用方法](#使用方法)
    - [设置](#设置)
- [安全保证 (简体中文)](#安全保证-简体中文)
  - [安全限制](#安全限制)
  - [法律责任](#法律责任)
- [版本](#版本)
- [许可](#许可)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# 介绍
`vscode-inline-encrypt` 是一个轻量级 VSCode 插件，允许您在不离开编辑器的情况下加密和解密文本片段。  
它集成了 GnuPG (`gpg`)，可以让您复用现有的密钥对和工作流程。

典型使用场景：

- 在 Markdown 笔记中隐藏 API 密钥或敏感密码。  
- 在 Git 仓库中共享加密片段而不泄露机密。  
- 在多台计算机上使用相同的 GPG 身份进行工作。  


## 赞助
本项目由社区维护。  
如果您觉得此插件有用并希望支持开发，可以考虑：  
-  :beers: [通过 PayPal 支持](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
- 提交反馈和 Bug  
- 分享  

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# 文档

## 安装

1. [下载](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) `.vsix` 包，或直接从市场安装。  
2. 确保系统已安装 `gpg` (`gpg --version`)。在扩展设置中指定其路径。  
3. 在使用扩展前导入或创建密钥对。  
4. 在扩展设置中填写密钥。  

### GPG 说明
如果您是 `gpg` 新手：  
```bash
# 生成密钥对
gpg --gen-key  
# 列出公钥
gpg --list-keys  
# 列出私钥
gpg --list-secret-keys 
# 导出私钥 ⚠
gpg --export-secret-keys YOUR_ID > mykey.prk
# 导出公钥
gpg -a --export [id/名称] > 输出文件
# 导入私钥
gpg -a --import key.prk
gpg --edit-key email@example.com
>trust, 5, quit
# 导入公钥
gpg -a --import key.puk
````

PS: 一些图形工具可以完成这些操作，请选择最适合您的。

## 使用方法

* 选择文本，然后执行以下命令之一：

  * **加密选中内容** (`inlineEncrypt.encrypt`)
  * **解密选中内容** (`inlineEncrypt.decrypt`)
* 可选：为这些功能设置快捷键。
  ![](assets/key_shortcut.jpg)

### 设置

您需要配置：

* `inlineEncrypt.gpgPath`: `gpg` 的路径。
* `inlineEncrypt.keyId`: 默认加密使用的密钥 ID。

示例 `settings.json`：

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```
---

# 安全保证 (简体中文)

此扩展程序不收集**任何形式的数据**。这是我能提供的唯一保证。

扩展程序仅获取所选文本，通过 **GnuPG** 在内存中进行加密或解密，然后替换内容。
换句话说：它本质上只是一个将所有工作交给 GPG 的宏。

## 安全限制

* 如果您的系统已被入侵（木马、键盘记录器、rootkit 等），**扩展程序无法检测或阻止**。
* 加密并非绝对：它只能在一段时间内隐藏信息。理论上所有算法都可能被破解，但以当前手段（2025 年），破解 RSA 2048 对普通攻击者来说并不现实。
* 您必须自行负责备份 GPG 密钥。扩展程序完全依赖于您的 GnuPG 安装，不包含任何密钥管理机制。

## 法律责任

* 在某些国家，强加密受到管制，甚至被视为武器（如美国曾经的情况）。**使用前请先了解您所在国家的法律。**
* 在司法调查中，法院可能要求您提供密钥以解密数据。如果您无法提供，可能会严重加重您的法律后果。

&nbsp;

⚠️ **总结：** 此扩展程序只是 GnuPG 的一个简单中介。它不能保护您的系统，不管理密钥，也无法对抗已被入侵的计算机。

&nbsp;

---

# 版本

请参阅 [CHANGELOG.md](changelog.md) 获取版本历史记录。

# 许可

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons 许可" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>
