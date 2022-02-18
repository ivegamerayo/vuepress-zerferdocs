# Desafio 02-Bruja

_Disclaimer:_ Esta información ha sido obtenida desde [programamos.es](https://programamos.es)

**INSTRUCCIONES**: Controla el movimiento de la bruja con las teclas flecha derecha, izquierda, arriba y abajo para esquivar a los dragones y capturar el mayor número posible de estrellas.



## Cambiando el sprite
En este caso no queremos usar al gato asi que vamos a eliminar el Sprite pulsando en el icono de la papelera.

<img :src="$withBase('/img/Pasted image 20211219140816 1.png')">

A continuación nos vamos a elegir uno nuevo desde la biblioteca, para ello pulsamos en el siguiente icono.

<img :src="$withBase('/img/Pasted image 20211219141024 1.png')">

Si no queremos ir bajando podemos escribir el nombre de nuestro personaje, en este caso vamos a seleccionar esta bruja.

## Primeros pasos

Ahora vamos a proceder a escribir los programas que controlarán los movimientos del personaje. Lo primero que debe hacerse siempre con un personaje es indicarle lo que debe hacer cuando comience a ejecutarse el videojuego. Así que vamos a crear un programa que indique cuál es la posición de la pantalla en la que la bruja debe aparecer cuando comience una partida.

<img :src="$withBase('/img/Pasted image 20211219141544 1.png')">

Si os fijais hemos añadido 3 bloques, el primero es un evento el cual le dice el programa que eso lo tiene que hacer cuando pulsamos la bandera verde.

El siguiente bloque le dice donde se tiene que poner el sprite cuando comencemos el programa, en este caso como queremos que se encuentre en el centro de la pantalla ponemos 0,0.

Y luego el bloque que fija la rotacion es para que el icono no pueda darse la vuelta.

## Controlando el movimiento con los cursores

En este caso vamos a jugar con los bloques de eventos y los de movimiento.

<img :src="$withBase('/img/Pasted image 20211219142433 1.png')">

Si nos fijamos le estamos diciendo que al presionar la tecla derecha le sumamos al eje x (horizontal) 10 pasos a la posicion. Y asi vamos con todos. El bloque que dice apuntar en direccion 90 es el cual estamos le decimos a donde tiene que mirar el personaje.


## Añadiendo mas personajes

Vamos a hacer el mismo proceso que antes para añadir otro personaje.

<img :src="$withBase('/img/Pasted image 20211219142721 1.png')">
<img :src="$withBase('/img/Pasted image 20211219142734 1.png')">

## Los bucles

El código que controlará el movimiento del dragón es muy sencillo pero muy interesante, ya que introduce el concepto de bucle. ¿Qué es un bucle? Pues un bucle es un conjunto de instrucciones que se repite varias veces. Como nuestro dragón va a estar constantemente moviéndose por la pantalla de lado a lado se trata de una situación perfecta para usar un bucle. Echemos un vistazo al programa antes de analizarlo

## Los condicionales

Con este código nuestro dragón estará constantemente moviéndose por la pantalla. Ahora vamos a añadir un segundo programa al dragón, que se va a encargar de controlar si el dragón está tocando a la bruja, ya que en ese caso se debe mostrar un mensaje y terminar la partida. Para ello usaremos de nuevo un bucle _repetir por siempre_:

<img :src="$withBase('/img/Pasted image 20211221165713.png')">


## Recogiendo recompensas

Para terminar el juego, ahora tenemos que importar el objeto estrella que la bruja tratará de ir cogiendo para sumar puntos:

[![11_estrella_y_otro_dragon](https://programamos.es/web/wp-content/uploads/11_estrella_y_otro_dragon-250x256.png)](https://programamos.es/web/wp-content/uploads/11_estrella_y_otro_dragon.png)

El comportamiento de la estrella que deseamos es el siguiente: queremos que aparezca en un punto al azar de la pantalla y que, cuando sea tocada por la bruja, desaparezca y aparezca en otra posición al azar de la pantalla. Éste es el programa que implementa ese comportamiento:

[![12_codigo_estrella](https://programamos.es/web/wp-content/uploads/12_codigo_estrella-250x129.png)](https://programamos.es/web/wp-content/uploads/12_codigo_estrella.png)

Como se puede comprobar, aparecen de nuevo muchos bloques que ya conocemos: _al presionar la bandera verde_, bucle _repetir por siempre_, un bloque condicional para ver si está tocando al objeto bruja… Quizás el bloque más complejo de entender es el que controla la posición a la que debe moverse la estrella, que es un número al azar entre -230 y 230 para la posición X y un número al azar entre -170 y 170 para la posición Y, lo que hace que la estrella aparezca cada vez en un sitio diferente de la pantalla.

## Sumando puntos

Como el objetivo del juego es sumar el máximo número de puntos posibles, es necesario contar con un marcador que se vaya actualizando cada vez que la bruja toque a la estrella. Para ello debemos irnos a los bloques de la categoría _Datos_ y crear una nueva _variable_ que llamaremos Puntos. Al crear la variable nos aparecerán nuevos bloques que podemos utilizar para actualizar su valor. Así, cuando comience el juego siempre tendremos que darle a la variable puntos el valor 0; y cada vez que la bruja toque la estrella tendremos que modificar su valor para sumar un punto más. Por eso este tipo de bloques, que guardan datos, se llaman _variables_, porque su valor _varía_ a lo largo de la partida. El código de la estrella quedará tal y como se muestra en la siguiente imagen, en la que ya se han incluido los bloques relativos al control de la variable:

[![13_codigo_puntos](https://programamos.es/web/wp-content/uploads/13_codigo_puntos-250x100.png)](https://programamos.es/web/wp-content/uploads/13_codigo_puntos.png)

## Modificando el fondo

Si has llegado hasta aquí, ¡buen trabajo! Ya tienes tu videojuego listo y funcionando. Aunque quizás, para darle algo más de vistosidad, podríamos modificar el fondo de la pantalla para que se muestre otro más apropiado. Para ello pulsaremos sobre el escenario (bajo la ventana de objetos), nos iremos a la pestaña _Fondos_ (similar a los disfraces de los objetos pero para el escenario) y pulsaremos sobre el botón _Fondo nuevo: Elegir un fondo desde la biblioteca_.

[![14_importar_fondo](https://programamos.es/web/wp-content/uploads/14_importar_fondo.png)](https://programamos.es/web/wp-content/uploads/14_importar_fondo.png)

Y elegiremos, en la sección _Espacio_ de la biblioteca, el fondo _Stars_:

[![15_fondo_estrellas](https://programamos.es/web/wp-content/uploads/15_fondo_estrellas1-250x228.png)](https://programamos.es/web/wp-content/uploads/15_fondo_estrellas1.png)

Ahora sí, ¡enhorabuena! Tu videojuego está listo para guardar y compartir con quien quieras a través de la web. ¿A que ha resultado mucho más fácil de lo que se podría esperar en un principio? A partir de ahora, el límite lo marcas tú con tu imaginación.