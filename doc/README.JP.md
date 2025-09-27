vscode-inline-encrypt
==========

## 目次
- [はじめに](#はじめに)  
- [スポンサー](#スポンサー)  
- [ドキュメント](#ドキュメント)
  - [インストール](#インストール)
    - [GPG の注意](#gpg-の注意)
  - [使い方](#使い方)
    - [設定](#設定)
- [セキュリティ保証 (日本語)](#セキュリティ保証-日本語)
  - [セキュリティ上の制限](#セキュリティ上の制限)
  - [法的責任](#法的責任)
- [バージョン](#バージョン)
- [ライセンス](#ライセンス)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# はじめに
`vscode-inline-encrypt` は、VSCode 用の軽量拡張機能で、エディタを離れずにテキストの一部を暗号化・復号化できます。  
GnuPG (`gpg`) と統合されており、既存の鍵ペアやワークフローを再利用可能です。

典型的な使用例：

- Markdown ノートに API キーや機密パスワードを隠す  
- Git リポジトリで暗号化されたスニペットを共有し、秘密情報を漏らさない  
- 複数のマシンで同じ GPG ID を使って作業する  


## スポンサー
このプロジェクトはコミュニティによって維持されています。  
役立つと感じた場合、開発をサポートするために以下を検討してください：  
-  :beers: [PayPal でサポート](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
- フィードバックやバグの報告  
- 共有する  

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# ドキュメント

## インストール

1. `.vsix` [パッケージをダウンロード](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) するか、Marketplace から直接インストールしてください。
2. システムに `gpg` がインストールされていることを確認します (`gpg --version`)。拡張機能の設定でパスを指定してください。  
3. 拡張機能を使う前に鍵ペアをインポートまたは作成します。  
4. 使用する鍵を拡張機能の設定で指定します。  

### GPG の注意
`gpg` が初めての場合：  
```bash
# 鍵ペアを生成
gpg --gen-key  
# 公開鍵の一覧表示
gpg --list-keys  
# 秘密鍵の一覧表示
gpg --list-secret-keys 
# 秘密鍵をエクスポート ⚠
gpg --export-secret-keys YOUR_ID > mykey.prk
# 公開鍵をエクスポート
gpg -a --export [id/名前] > 出力ファイル
# 秘密鍵をインポート
gpg -a --import key.prk
gpg --edit-key email@example.com
>trust, 5, quit
# 公開鍵をインポート
gpg -a --import key.puk
````

PS: グラフィカルツールでも操作可能です。自分に合ったものを選んでください。

## 使い方

* テキストを選択し、次のコマンドを実行します：

  * **選択を暗号化** (`inlineEncrypt.encrypt`)
  * **選択を復号化** (`inlineEncrypt.decrypt`)
* オプションですが、各機能にショートカットキーを設定するのがおすすめです。
  ![](assets/key_shortcut.jpg)

### 設定

設定する必要がある項目：

* `inlineEncrypt.gpgPath`: `gpg` のパス
* `inlineEncrypt.keyId`: 暗号化に使用するデフォルトの鍵 ID

`settings.json` の例：

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```

---

# セキュリティ保証 (日本語)

この拡張機能は**いかなる種類のデータも収集しません**。これは私が提供できる唯一の保証です。

拡張機能は選択したテキストを取得し、**GnuPG** を使用してメモリ内で暗号化または復号し、その内容を置き換えるだけです。
つまり、本質的にはすべての処理を GPG に委ねるマクロに過ぎません。

## セキュリティ上の制限

* システムが侵害されている場合（トロイの木馬、キーロガー、ルートキットなど）、**拡張機能はそれを検出または防止する手段を持ちません**。
* 暗号化は絶対的なものではありません。一定期間だけ情報を隠すに過ぎません。理論的にはすべてのアルゴリズムは破られ得ますが、現時点の技術（2025 年）では、RSA 2048 を「通常の攻撃者」が破るのは非現実的です。
* GPG 鍵のバックアップは利用者自身の責任です。この拡張機能は GnuPG のインストールに完全に依存しており、鍵管理機能は含まれていません。

## 法的責任

* 一部の国では、強力な暗号化は規制されているか、あるいは武器と見なされる場合があります（かつての米国のように）。**使用前に必ず自国の法律を確認してください。**
* 司法調査の際、裁判所がデータ復号のために鍵の提供を命じる場合があります。提供できなければ、法的立場が大きく悪化する可能性があります。

&nbsp;

⚠️ **まとめ:** この拡張機能は単なる GnuPG への仲介役にすぎません。システムを保護せず、鍵を管理せず、侵害された環境に対して魔法のような力を持つわけではありません。

&nbsp;

---


# バージョン

バージョン履歴は [CHANGELOG.md](changelog.md) を参照してください。

# ライセンス

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="クリエイティブ・コモンズ ライセンス" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>

