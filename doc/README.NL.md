vscode-inline-encrypt
==========

## Inhoudsopgave
- [Introductie](#introductie)  
- [Sponsors](#sponsors)  
- [Documentatie](#documentatie)
  - [Installatie](#installatie)
    - [GPG-opmerking](#gpg-opmerking)
  - [Gebruik](#gebruik)
    - [Instellingen](#instellingen)
- [Beveiligingsgaranties](#beveiligingsgaranties)
  - [Beperkingen van de beveiliging](#beperkingen-van-de-beveiliging)
  - [Wettelijke verantwoordelijkheden](#wettelijke-verantwoordelijkheden)
- [Versies](#versies)
- [Licentie](#licentie)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# Introductie
`vscode-inline-encrypt` is een lichte VSCode-extensie waarmee je tekstfragmenten kunt versleutelen en ontsleutelen zonder de editor te verlaten.  
Het integreert met GnuPG (`gpg`), zodat je je bestaande sleutelparen en workflows kunt hergebruiken.

Typische gebruiksscenario’s:

- API-sleutels of gevoelige wachtwoorden verbergen in een Markdown-notitie.  
- Versleutelde fragmenten delen in Git-repositories zonder geheimen bloot te geven.  
- Op meerdere computers werken met dezelfde GPG-identiteit.  


## Sponsors
Dit project is community-gedreven.  
Als je het nuttig vindt en de ontwikkeling wilt ondersteunen, overweeg dan:  
-  :beers: [Ondersteuning via PayPal](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
-  Feedback en bugrapporten indienen  
-  Delen  

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# Documentatie

## Installatie

1. [Download](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) het `.vsix`-pakket of installeer het direct via de marketplace.  
2. Zorg ervoor dat `gpg` op je systeem is geïnstalleerd (`gpg --version`). Geef het pad op in de extensie-instellingen.  
3. Importeer of maak een sleutelparen voordat je de extensie gebruikt.  
4. Geef de sleutel op in de extensie-instellingen.  

### GPG-opmerking
Als je helemaal nieuw bent met `gpg`:  
```bash
# Een sleutelparen genereren
gpg --gen-key  
# Publieke sleutels bekijken
gpg --list-keys  
# Privésleutels bekijken
gpg --list-secret-keys 
# Privésleutel exporteren ⚠
gpg --export-secret-keys YOUR_ID > mijn_sleutel.prk
# Publieke sleutel exporteren
gpg -a --export [id/naam] > uitvoerbestand
# Privésleutel importeren
gpg -a --import sleutel.prk
gpg --edit-key email@example.com
>trust, 5, quit
# Publieke sleutel importeren
gpg -a --import sleutel.puk
````

PS: Sommige grafische tools kunnen deze acties uitvoeren; kies degene die het beste bij jou past.

## Gebruik

* Selecteer tekst en voer een van de volgende opdrachten uit:

  * **Selectie versleutelen** (`inlineEncrypt.encrypt`)
  * **Selectie ontsleutelen** (`inlineEncrypt.decrypt`)
* Optioneel: maak sneltoetsen voor deze functies.
  ![](assets/key_shortcut.jpg)

### Instellingen

Je moet het volgende configureren:

* `inlineEncrypt.gpgPath`: Pad naar jouw `gpg`.
* `inlineEncrypt.keyId`: Standaard sleutel-ID voor encryptie.

Voorbeeld `settings.json`:

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```
---

# Beveiligingsgaranties

Deze extensie verzamelt **geen enkele gegevens**, van welke aard dan ook. Dit is de enige harde garantie die ik kan geven.

De extensie neemt gewoon de geselecteerde tekst, versleutelt of ontsleutelt deze in het geheugen via **GnuPG**, en vervangt vervolgens de inhoud.
Met andere woorden: het is in wezen een macro die al het werk aan GPG overlaat.

## Beperkingen van de beveiliging

* Als uw systeem is gecompromitteerd (trojan, keylogger, rootkit, enz.), **heeft de extensie geen manier om dit te detecteren of te blokkeren**.
* Versleuteling is niet absoluut: het verbergt informatie slechts voor een bepaalde tijd. Elk algoritme kan theoretisch worden gekraakt, maar met de huidige middelen (2025) is het kraken van RSA 2048 onrealistisch voor een "standaard" aanvaller.
* U bent als enige verantwoordelijk voor het back-uppen van uw GPG-sleutels. De extensie vertrouwt volledig op uw GnuPG-installatie en bevat geen sleutelbeheermechanisme.

## Wettelijke verantwoordelijkheden

* In sommige landen wordt sterke versleuteling gereguleerd of zelfs als wapen beschouwd (zoals ooit in de VS het geval was). **Controleer de wetgeving in uw land voordat u het gebruikt.**
* In het geval van een gerechtelijk onderzoek kan een rechtbank u verplichten uw sleutels te verstrekken om uw gegevens te ontsleutelen. Als u dit niet kunt, kan uw juridische situatie aanzienlijk verergeren.

&nbsp;

⚠️ **Kortom:** de extensie is slechts een eenvoudige tussenlaag naar GnuPG. Ze beschermt uw systeem niet, beheert uw sleutels niet en heeft geen magische kracht tegen een gecompromitteerde machine.

&nbsp;

---

# Versies

Zie [CHANGELOG.md](changelog.md) voor de versiegeschiedenis.

# Licentie

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Creative Commons Licentie" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>

