vscode-inline-encrypt
==========

## Tabla de contenidos
- [Introducción](#introducción)  
- [Patrocinadores](#patrocinadores)  
- [Documentación](#documentación)
  - [Instalación](#instalación)
    - [Nota GPG](#nota-gpg)
  - [Uso](#uso)
    - [Configuración](#configuración)
- [Garantías de seguridad](#garantías-de-seguridad)
  - [Limitaciones de seguridad](#limitaciones-de-seguridad)
  - [Responsabilidades legales](#responsabilidades-legales)
- [Versiones](#versiones)
- [Licencia](#licencia)

---

![demo](../assets/capture.gif)

&nbsp;

[Français](README.FR.md), [English](../README.md), [Español](README.ES.md),[German](README.DE.md),[Dutch](README.NL.md), [简体中文](README.CN.md) , [繁體中文](README.TW.md) , [日本語](README.JP.md)


# Introducción
`vscode-inline-encrypt` es una extensión ligera para VSCode que permite cifrar y descifrar fragmentos de texto sin salir del editor.  
Se integra con GnuPG (`gpg`) para que puedas reutilizar tus pares de claves y flujos de trabajo existentes.

Casos de uso típicos:

- Ocultar claves API o contraseñas sensibles en una nota Markdown.  
- Compartir fragmentos cifrados en repositorios Git sin exponer secretos.  
- Trabajar en varias máquinas utilizando la misma identidad GPG.  


## Patrocinadores
Este proyecto es impulsado por la comunidad.  
Si te resulta útil y quieres apoyar su desarrollo, considera:  
-  :beers: [Apoyo vía PayPal](https://www.paypal.com/donate/?hosted_button_id=59CQFU7TNSWP2)  
-  Enviar comentarios y reportes de errores  
-  Compartirlo  

[<img src="../assets/don_paypal.png" width="50"/>](../assets/don_paypal.png)  


---

# Documentación

## Instalación

1. [Descarga](https://github.com/extenebrisadlucem/vscode-inline-encrypt/releases) el paquete `.vsix` o instálalo directamente desde la marketplace.  
2. Asegúrate de tener `gpg` instalado en tu sistema (`gpg --version`). Indica la ruta en la configuración de la extensión.  
3. Importa o crea un par de claves antes de usar la extensión.  
4. Configura la clave en la configuración de la extensión.  

### Nota GPG
Si eres completamente nuevo con `gpg`:  
```bash
# Generar un par de claves
gpg --gen-key  
# Listar claves públicas
gpg --list-keys  
# Listar claves privadas
gpg --list-secret-keys 
# Exportar clave privada ⚠
gpg --export-secret-keys YOUR_ID > miclave.prk
# Exportar clave pública
gpg -a --export [id/nombre] > archivo_salida
# Importar clave privada
gpg -a --import clave.prk
gpg --edit-key tuemail@ejemplo.com
>trust, 5, quit
# Importar clave pública
gpg -a --import clave.puk
````

PD: Algunas herramientas gráficas permiten realizar estas operaciones; usa la que te resulte más cómoda.

## Uso

* Selecciona un texto y ejecuta uno de los siguientes comandos:

  * **Cifrar selección** (`inlineEncrypt.encrypt`)
  * **Descifrar selección** (`inlineEncrypt.decrypt`)
* (Opcional) Crear atajos de teclado para estas funciones.
  ![](assets/key_shortcut.jpg)

### Configuración

Debes configurar:

* `inlineEncrypt.gpgPath`: Ruta a tu `gpg`.
* `inlineEncrypt.keyId`: ID de clave predeterminada para cifrado.

Ejemplo `settings.json`:

```json
{
  "inlineEncrypt.gpgPath": "/usr/bin/gpg",
  "inlineEncrypt.keyId": "0x158B2252"
}
```
---

# Garantías de seguridad

Esta extensión no recopila **ningún dato** de ningún tipo. Esta es la única garantía firme que puedo proporcionarle.

La extensión simplemente toma el texto seleccionado, lo cifra o descifra en memoria mediante **GnuPG**, y luego reemplaza el contenido.
En otras palabras: es esencialmente una macro que delega todo el trabajo a GPG.

## Limitaciones de seguridad

* Si su sistema está comprometido (troyano, keylogger, rootkit, etc.), **la extensión no tiene forma de detectarlo o bloquearlo**.
* El cifrado no es absoluto: solo oculta la información durante un período de tiempo determinado. Todo algoritmo puede romperse teóricamente, pero con los medios actuales (2025), romper RSA 2048 es irrealista para un atacante "estándar".
* Usted es el único responsable de realizar copias de seguridad de sus claves GPG. La extensión depende completamente de su instalación de GnuPG y no incluye ningún mecanismo de gestión de claves.

## Responsabilidades legales

* En algunos países, el cifrado fuerte está regulado o incluso se considera un arma (como fue el caso en los Estados Unidos). **Verifique las leyes de su país antes de usarlo.**
* En caso de una investigación judicial, un tribunal puede obligarle a proporcionar sus claves para descifrar sus datos. No hacerlo puede agravar considerablemente su situación legal.

&nbsp;

⚠️ **En resumen:** la extensión es un simple intermediario hacia GnuPG. No protege su sistema, no gestiona sus claves y no tiene poderes mágicos frente a una máquina comprometida.

&nbsp;

---

# Versiones

Consulta [CHANGELOG.md](changelog.md) para el historial de versiones.

# Licencia

CC-BY-NC-SA -> [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
<img alt="Licencia Creative Commons" style="border-width:0" src="../assets/Cc-by-nc-sa_icon.png" /></a>

<br><br><br> <sub><small>ON7AUR - CC-BY-NC-SA ®</small></sub>

