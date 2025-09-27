vscode-inline-encrypt
==========

## Table des matières
- [Introduction](#Introduction)  
- [Sponsors](#Sponsors)  
- [Documentation](#documentation)
  - [Installation](#installation)
    - [Note GPG](#note-gpg)
  - [Utilisation](#utilisation)
    - [Paramètres](#paramètres)
- [Garanties de sécurité](#garanties-de-sécurité)
  - [Limites de sécurité](#limites-de-sécurité)
  - [Responsabilités légales](#responsabilités-légales)
- [Versions](#versions)
- [Licence](#licence)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# Introduction
`vscode-inline-encrypt` est une extension VSCode légère qui vous permet de chiffrer et de déchiffrer des extraits de texte sans quitter votre éditeur.
Elle s'intègre à GnuPG ( gpg) pour vous permettre de réutiliser vos paires de clés et vos workflows existants.

Cas d'utilisation typiques :

-  Masquez les clés API ou les mots de passe sensibles dans une note Markdown.
-  Partagez des extraits chiffrés dans les référentiels Git sans exposer de secrets.
-  Travaillez sur plusieurs machines tout en utilisant la même identité GPG.


## Sponsors
Ce projet est communautaire.
Si vous le trouvez utile et souhaitez contribuer à son développement, pensez à :
-  :beers: [Support via PayPal](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)
-  Soumettre vos remarques et bugs
-  Partagez

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# Documentation

## Installation

1. [Téléchargez](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) le package `.vsix` ou installez-le directement depuis market place.
2. Assurez-vous d'avoir `gpg` installé sur votre système (`gpg --version`). Indiquez en le chemin dans les paramètres de l'extension.
3. Importez ou créez une paire de clés avant d'utiliser l'extension.
4. Renseignez la clé dans les paramètres de l'extension.

### Note GPG
Si vous êtes complètement débutant avec `gpg`, 
```bash
# Générer une paire de clés
gpg --gen-key  
# Lister les clés public
gpg --list-keys  
# Lister les clés privées
gpg --list-secret-keys 
# Exporter la clé privée ⚠
gpg --export-secret-keys YOUR_ID > macle.prk
# Exporter la clé public
gpg -a --export [id/nom] > fichier de sortie
# Importer une clé privée
gpg -a --import cle.prk
gpg --edit-key emaildelaclé
>trust, 5, quit
# Importer une clé public
gpg -a --import cle.puk
```
PS: Certains outils graphiques permettent ces opérations, à vous de voir lequel vous convient le mieux.


## Utilisation
- Sélectionnez du texte, puis exécutez la commande : 
  - **Chiffrer la sélection** (`inlineEncrypt.encrypt`)  
  - **Déchiffrer la sélection** (`inlineEncrypt.decrypt`)  
- C'est facultatif, mais un bon plan est de faire un raccourci clavier pour chacune de ces fonctions
![](assets/key_shortcut.jpg)

### Paramètres
Vous devez configurer :
- `inlineEncrypt.gpgPath`: Chemin vers votre `gpg`.  
- `inlineEncrypt.keyId`: ID de clé par défaut à utiliser pour le chiffrement.

Exemple `settings.json`:
```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```
---

# Garanties de sécurité

Cette extension ne collecte **aucune donnée**, quelle qu’en soit la nature. C’est la seule garantie ferme que je peux vous fournir.

L’extension se contente de prendre le texte sélectionné, de le chiffrer ou déchiffrer en mémoire via **GnuPG**, puis de remplacer le contenu.  
En d’autres termes : c’est essentiellement une macro qui délègue tout le travail à GPG.  

## Limites de sécurité
- Si votre système est compromis (trojan, keylogger, rootkit, etc.), **l’extension n’a aucun moyen de le détecter ou de le bloquer**.  
- Le chiffrement n’est pas absolu : il ne fait que masquer l’information pendant un temps donné. Tout algorithme finit théoriquement par être cassé, mais avec les moyens actuels (2025), casser une clé RSA 2048 reste irréaliste pour un attaquant « standard ».  
- Vous êtes seul responsable de la sauvegarde de vos clés GPG. L’extension s’appuie entièrement sur votre installation GnuPG et n’inclut aucun mécanisme de gestion des clés.  

## Responsabilités légales
- Dans certains pays, le chiffrement fort est soumis à réglementation, voire considéré comme une arme (comme ce fut le cas aux États-Unis). **Renseignez-vous sur la législation de votre pays avant utilisation.**  
- En cas d’enquête judiciaire, un tribunal peut vous contraindre à fournir vos clés pour déchiffrer vos données. Ne pas être en mesure de le faire peut aggraver votre situation légale.  

&nbsp;

⚠️ **En résumé :** l’extension est un simple intermédiaire vers GnuPG. Elle ne protège pas votre machine, ne gère pas vos clés, et n’a aucun pouvoir magique face à un système compromis.

&nbsp;

---

# Versions
Voir [CHANGELOG.md](changelog.md) pour l'historique des versions.


# Licence
CC-BY-NC-SA -> https://creativecommons.org/licenses/by-nc-sa/4.0/

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Licence Creative Commons" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>





<br><br><br>
<sub><small>ON7AUR - CC-BY-NC-SA ®</small></H4>