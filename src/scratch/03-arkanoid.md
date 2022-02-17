# Desafío 03 - Arkanoid

**Prerequisitos**
Trabajaremos sobre Scratch 2

## Eliminando el Sprite que viene por defecto (El gato)

<img :src="$withBase('/img/Pasted image 20220214192118.png')">

## Seleccionando el fondo
Elegimos el fondo que mas nos guste

## Dibujando los objetos

Pinchamos sobre el lápiz y se nos abrira la seccion de disfraces
<img :src="$withBase('/img/Pasted image 20220214192229.png')">

### Componentes
- Pelota
-  Button2
  
**Cambiar el nombre**
Aunque esto es opcional, le podemos cambiar el nombre para que podamos distinguirlos de mejor manera.

## Programando el botón
### Asignando que comience en el centro
Para ello, pulsamos en _Eventos_ y seleccionamos la banderita verde, en la seccion _Movimiento_ seleccionamos el bloque que dice _ir a x: numero y: numero_ y le ponemos en en el eje x: 0 y: -140 de esta forma se centrara horizontalmente y se quedara abajo verticalmente

<img :src="$withBase('/img/Pasted image 20220217121521.png')">

**Eventos de teclado**

Aunque se puede hacer como habiamos hecho con el ejercicio del pingpong y solo cambiando el eje y por el x, en este caso vamos a aprender los bucles y otra forma distinta de hacerlo.

<img :src="$withBase('/img/Pasted image 20220217123642.png')">


Como podemos ver nos encontramos 1 bloque _por siempre_ el cual tiene dentro 2 bloques _si_ Si nos fijamos estamos preguntando que si la tecla esta pulsada que apunte hacia un lado y se mueva.

Si hacemos la prueba veremos que el boton hace cosas raras, para ello pondremos un blque antes del _por siempre_ que dice _fijar estilo de rotacion izquierda-derecha_

## Programando la pelota

En este caso queremos que siempre comience en el centro asi que usaremos la misma tecnica de antes pero dejando la x e y en 0

<img :src="$withBase('/img/Pasted image 20220217124120.png')">

Metemos un bucle _por siempre_ el cual se mueva 10 pasos y que rebote si hay un borde y como queremos que sea de una forma aleatoria añadimos un bucle que apunte a una direccion al azar

<img :src="$withBase('/img/Pasted image 20220217124435.png')">

Ahora ya se parece mas al juego final, pero queremos que la pelota rebote cuando toque con nuestro boton asi que para ello haremos lo siguiente


<img :src="$withBase('/img/Pasted image 20220217124755.png')">

Como vemos, hemos añadido un control de si en el cual dice que si esta tocando nuestro boton apunte en una direccion al azar de -60 y 60 la razon de estos numeros es que pueda irse hacia arriba

<img :src="$withBase('/img/Pasted image 20220217125301.png')">

## Perder

Cuando la pelota toca el borde de abajo queremos que se pare la partida, asi que para ello ponemos los siguientes bloques

<img :src="$withBase('/img/Pasted image 20220217125402.png')">

Lo que estamos haciendo aqui es que cuando la posicion vertical de la pelota sea menor a -135 salga un mensaje diciendo que hemos perdido y que se pare el juego