---
title: "Instalación"
description: "Instala y configura Nextcloud de una manera rápida y sencilla"
summary: ""
date: 2023-12-07T00:41:17+01:00
lastmod: 2023-12-07T00:41:17+01:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "nextcloud-ba526dc6b9ce0a0c6b809a9b388b7f17"
weight: 999
toc: true
seo:
  title: "Como instalar y configurar nextcloud en una raspberry pi" # custom title (optional)
  description: "Instala nextclouud en una raspberry pi" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

>**Prerequisitos**
> - Raspberry 3B+ o superior
> - Conocimientos básicos de Linux 😁
> - [Balena etcher](https://etcher.balena.io/#download-etcher)

## Descargar la imagen y flashear

1.  [Descargar la imagen de Nextcloud](https://github.com/nextcloud/nextcloudpi/releases/download/v1.53.0/NextCloudPi_LXC_arm64_v1.53.0.tar.gz)
2. Flashear imagen con balena etcher
3. Conectar la tarjeta a la raspi.
4. Iniciar raspberry e introducir los datos que nos pide.


## Activación

La primera vez que accedemos a ella [https://ip_raspberry.local](https://nextcloud.local) nos encontramos con lo siguiente.


![Test](image.png)

Como podemos ver por defecto el usuario es "ncp" tanto para la parte de administración como para la parte usuario.

Nos lo guardamos a buen recaudo. Aunque mediante la consola de la raspberry en caso necesario de cambiar la contrasñea podemos ejecutar ```nc-passwd```

Una vez memorizados los dos usuarios y contraseñas, pulsamos en el botón __Activate__ (Tardará unos minutos. Depende la raspi que estés usando).


### Configuraciones iniciales

Una vez activado nos habrá redirigido al puerto __4443__

Nos pedirá autenticarnos asi que usamos el usuario __ncp__ y su respectiva contraseña.

Ejecutamos el wizard.
![Alt text](image-1.png)

Y ya tenemos panel de administración

![Alt text](image-2.png)
