# Piedra papel o tijera

En este ejercicio vamos a intentar crear el juego de piedra papel o tijera, para ello vamos a analizarlo un poco.

<img :src="$withBase('/img/Pasted image 20220223213531.png')">

Siempre tenemos 3 opciones las cuales son: 
1. Piedra
2. Papel
3. Tijera

## Inputs

Buscamos el que nos dice __On button A pressed__ 



## Creando una variable

Una variable es como una cajita en la cual le puedes guardar informacion y en este caso queremos guardar un numero que elija el ordenador y lo guarde en esa cajita.

Para ello nos vamos a Variables y pulsamos en __Make an Variable__ y le damos un nombre, por ejemplo _solucion_, de las opciones que nos han salido elegimos la opcion que dice _set solucion to 0_ ahora nos vamos a el bloque Math y elegimos el que dice _pick random 0 to 10_ y lo metemos dentro de la variable

Le damos los numeros 1 y 3

<img :src="$withBase('/img/Pasted image 20220223215130.png')">

## Logica

Si hemos hecho los juegos anteriores de Scratch veremos que vamos a usar los IF

Con los If estamos preguntando si algo es igual a otra cosa

<img :src="$withBase('/img/Pasted image 20220223215311.png')">

Dentro del true vamos a meter un bloque que es 0 = 0 y dentro del primer 0 ponemos solucion y en el segundo un 1

<img :src="$withBase('/img/Pasted image 20220223215407.png')">


Con lo que acabamos de hacer estamos preguntando que si la solucion es = a 1

Recordemos que en la solucion hay un numero que puede ir del 1 al 3 asi que queremos comprobar cual es.

<img :src="$withBase('/img/Pasted image 20220223215511.png')">

Con esta imagen estamos haciendo que en caso de ser 1 se enciendan esos leds, si pulsamos en el mas de abajo nos saldra un _else_ y si volvemos a pulsar nos saldra otro parecido

<img :src="$withBase('/img/Pasted image 20220223215606.png')">

## Creando un boton para limpiar la pantalla

Siguiendo los pasos que hemos utilizado anteriormente creamos un input que sea pulsando el boton B y añadimis un _clear screen_

<img :src="$withBase('/img/Pasted image 20220223215811.png')">

### Solución
[Solucion](https://raw.githubusercontent.com/ivegamerayo/piedra-papel-y-tijera/master/main.ts)