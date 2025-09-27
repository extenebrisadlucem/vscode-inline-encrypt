vscode-inline-encrypt
==========

## Inhaltsverzeichnis
- [Einführung](#einführung)  
- [Sponsoren](#sponsoren)  
- [Dokumentation](#dokumentation)
  - [Installation](#installation)
    - [GPG-Hinweis](#gpg-hinweis)
  - [Verwendung](#verwendung)
    - [Einstellungen](#einstellungen)
- [Sicherheitsgarantien](#sicherheitsgarantien)
  - [Sicherheitsbeschränkungen](#sicherheitsbeschränkungen)
  - [Rechtliche Verantwortlichkeiten](#rechtliche-verantwortlichkeiten)
- [Versionen](#versionen)
- [Lizenz](#lizenz)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# Einführung
`vscode-inline-encrypt` ist eine leichte VSCode-Erweiterung, mit der Sie Textabschnitte verschlüsseln und entschlüsseln können, ohne den Editor zu verlassen.  
Sie integriert sich mit GnuPG (`gpg`), sodass Sie Ihre bestehenden Schlüsselpaaren und Workflows wiederverwenden können.

Typische Anwendungsfälle:

- API-Schlüssel oder sensible Passwörter in einer Markdown-Notiz verbergen.  
- Verschlüsselte Abschnitte in Git-Repositories teilen, ohne Geheimnisse preiszugeben.  
- Auf mehreren Rechnern arbeiten und dabei dieselbe GPG-Identität verwenden.  


## Sponsoren
Dieses Projekt ist Community-basiert.  
Wenn Sie es nützlich finden und die Entwicklung unterstützen möchten, erwägen Sie:  
-  :beers: [Unterstützung via PayPal](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
-  Feedback und Bug-Reports senden  
-  Teilen  

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# Dokumentation

## Installation

1. [Laden](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) Sie das `.vsix`-Paket herunter oder installieren Sie es direkt über den Marketplace.  
2. Stellen Sie sicher, dass `gpg` auf Ihrem System installiert ist (`gpg --version`). Geben Sie den Pfad in den Erweiterungseinstellungen an.  
3. Importieren oder erstellen Sie ein Schlüsselpaar, bevor Sie die Erweiterung verwenden.  
4. Geben Sie den Schlüssel in den Erweiterungseinstellungen an.  

### GPG-Hinweis
Wenn Sie komplett neu bei `gpg` sind:  
```bash
# Ein Schlüsselpaar erstellen
gpg --gen-key  
# Öffentliche Schlüssel auflisten
gpg --list-keys  
# Private Schlüssel auflisten
gpg --list-secret-keys 
# Privaten Schlüssel exportieren ⚠
gpg --export-secret-keys YOUR_ID > mein_schluessel.prk
# Öffentlichen Schlüssel exportieren
gpg -a --export [id/name] > ausgabedatei
# Privaten Schlüssel importieren
gpg -a --import schluessel.prk
gpg --edit-key email@example.com
>trust, 5, quit
# Öffentlichen Schlüssel importieren
gpg -a --import schluessel.puk
````

PS: Einige grafische Tools können diese Operationen ausführen; wählen Sie das für Sie passende Tool.

## Verwendung

* Markieren Sie Text und führen Sie einen der folgenden Befehle aus:

  * **Auswahl verschlüsseln** (`inlineEncrypt.encrypt`)
  * **Auswahl entschlüsseln** (`inlineEncrypt.decrypt`)
* Optional: Erstellen Sie Tastenkürzel für diese Funktionen.
  ![](assets/key_shortcut.jpg)

### Einstellungen

Sie müssen Folgendes konfigurieren:

* `inlineEncrypt.gpgPath`: Pfad zu Ihrem `gpg`.
* `inlineEncrypt.keyId`: Standard-Schlüssel-ID für die Verschlüsselung.

Beispiel `settings.json`:

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```
---

# Sicherheitsgarantien

Diese Erweiterung sammelt **keine Daten** jeglicher Art. Dies ist die einzige verbindliche Garantie, die ich geben kann.

Die Erweiterung nimmt lediglich den ausgewählten Text, verschlüsselt oder entschlüsselt ihn im Speicher mit **GnuPG** und ersetzt anschließend den Inhalt.
Mit anderen Worten: Es handelt sich im Wesentlichen um ein Makro, das die gesamte Arbeit an GPG delegiert.

## Sicherheitsbeschränkungen

* Wenn Ihr System kompromittiert ist (Trojaner, Keylogger, Rootkit usw.), **hat die Erweiterung keine Möglichkeit, dies zu erkennen oder zu blockieren**.
* Verschlüsselung ist nicht absolut: Sie verbirgt Informationen nur für eine bestimmte Zeit. Jedes Verfahren kann theoretisch gebrochen werden, aber mit den heutigen Mitteln (2025) ist das Knacken von RSA 2048 für einen „normalen“ Angreifer unrealistisch.
* Sie sind allein verantwortlich für die Sicherung Ihrer GPG-Schlüssel. Die Erweiterung stützt sich vollständig auf Ihre GnuPG-Installation und enthält keinen Mechanismus zur Schlüsselverwaltung.

## Rechtliche Verantwortlichkeiten

* In einigen Ländern ist starke Verschlüsselung reguliert oder sogar als Waffe eingestuft (wie es früher in den USA der Fall war). **Prüfen Sie die Gesetzeslage in Ihrem Land vor der Nutzung.**
* Im Falle einer gerichtlichen Untersuchung kann ein Gericht Sie zwingen, Ihre Schlüssel zur Entschlüsselung Ihrer Daten bereitzustellen. Wenn Sie dies nicht tun können, kann sich Ihre rechtliche Situation erheblich verschärfen.

&nbsp;

⚠️ **Kurz gesagt:** Die Erweiterung ist nur ein einfacher Vermittler zu GnuPG. Sie schützt Ihr System nicht, verwaltet keine Schlüssel und hat keine magischen Kräfte gegen ein kompromittiertes System.

---

# Versionen

Siehe [CHANGELOG.md](changelog.md) für die Versionshistorie.

# Lizenz

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons Lizenz" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>
