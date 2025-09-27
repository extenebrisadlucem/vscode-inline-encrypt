vscode-inline-encrypt
==========

## 目錄
- [介紹](#介紹)  
- [贊助](#贊助)  
- [文件](#文件)
  - [安裝](#安裝)
    - [GPG 說明](#gpg-說明)
  - [使用方法](#使用方法)
    - [設定](#設定)
- [安全保證 (繁體中文)](#安全保證-繁體中文)
  - [安全限制](#安全限制)
  - [法律責任](#法律責任)
- [版本](#版本)
- [授權](#授權)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# 介紹https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases
`vscode-inline-encrypt` 是一個輕量級的 VSCode 擴充套件，讓您可以在不離開編輯器的情況下加密和解密文字片段。  
它整合了 GnuPG (`gpg`)，可讓您重用現有的金鑰對與工作流程。

典型使用情境：

- 在 Markdown 筆記中隱藏 API 金鑰或敏感密碼。  
- 在 Git 儲存庫中分享加密片段而不暴露機密資訊。  
- 在多台電腦上使用相同的 GPG 身份進行工作。  


## 贊助
本專案由社群維護。  
如果您覺得這個擴充套件有用並希望支持開發，可以考慮：  
-  :beers: [透過 PayPal 支持](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
- 提交回饋與錯誤報告  
- 分享  

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# 文件

## 安裝

1. [下載](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) `.vsix` 套件，或直接從 Marketplace 安裝。  
2. 確認系統已安裝 `gpg` (`gpg --version`)。在擴充套件設定中指定其路徑。  
3. 在使用擴充套件前，匯入或建立金鑰對。  
4. 在擴充套件設定中填寫要使用的金鑰。  

### GPG 說明
如果您是 `gpg` 新手：  
```bash
# 生成金鑰對
gpg --gen-key  
# 列出公鑰
gpg --list-keys  
# 列出私鑰
gpg --list-secret-keys 
# 匯出私鑰 ⚠
gpg --export-secret-keys YOUR_ID > mykey.prk
# 匯出公鑰
gpg -a --export [id/名稱] > 輸出檔案
# 匯入私鑰
gpg -a --import key.prk
gpg --edit-key email@example.com
>trust, 5, quit
# 匯入公鑰
gpg -a --import key.puk
````

PS: 有些圖形化工具也可以完成這些操作，請選擇最適合您的。

## 使用方法

* 選取文字，然後執行以下命令之一：

  * **加密選取文字** (`inlineEncrypt.encrypt`)
  * **解密選取文字** (`inlineEncrypt.decrypt`)
* 可選：為這些功能設定快捷鍵。
  ![](assets/key_shortcut.jpg)

### 設定

您需要配置：

* `inlineEncrypt.gpgPath`: `gpg` 的路徑。
* `inlineEncrypt.keyId`: 預設用於加密的金鑰 ID。

範例 `settings.json`：

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```

---

# 安全保證 (繁體中文)

此擴充套件不收集**任何形式的資料**。這是我能提供的唯一保證。

擴充套件僅取得所選文字，透過 **GnuPG** 在記憶體中進行加密或解密，然後取代內容。
換句話說：它本質上只是個將所有工作交給 GPG 的巨集。

## 安全限制

* 如果您的系統已遭入侵（木馬、鍵盤側錄程式、rootkit 等），**擴充套件無法偵測或阻止**。
* 加密並非絕對：它只能在一段時間內隱藏資訊。理論上所有演算法都可能被破解，但以目前的手段（2025 年），破解 RSA 2048 對一般攻擊者來說並不現實。
* 您必須自行負責備份 GPG 金鑰。擴充套件完全依賴於您的 GnuPG 安裝，不包含任何金鑰管理機制。

## 法律責任

* 在某些國家，強加密受到管制，甚至被視為武器（如美國曾經的情況）。**使用前請先了解您所在國家的法律。**
* 在司法調查中，法院可能要求您提供金鑰以解密資料。如果您無法提供，可能會嚴重加重您的法律後果。

&nbsp;

⚠️ **總結：** 此擴充套件只是 GnuPG 的一個簡單中介。它無法保護您的系統、不管理金鑰，也無法對抗已遭入侵的電腦。

&nbsp;

---

# 版本

請參考 [CHANGELOG.md](changelog.md) 以查看版本歷史。

# 授權

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons 授權" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>
