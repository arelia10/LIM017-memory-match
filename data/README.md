# Data (sets de cartas)

Este directorio (carpeta) contiene dos fuentes de datos (sets de cartas) que
podemos usar en el proyecto. Cada set está en una sub-carpeta distinta:
# Pokemon Memory Match
## Nuestro  producto
Pokemon Memory Match  es un juego de memoria  inspirado en los populares pokemones que consiste en encontrar pares de cartas destapandolas de 2 en 2 hasta encontrar todos los pares. El juego está pensado para un público joven adulto y para jugar de manera individual.
## Historias de usuario
¿Quiénes son los principales usuarios de producto?
Usuarios jovenes adultos de entre 18 a 29 años.
¿Cuáles son los componentes principales de la interfaz y por qué?
* Boton de inicio.
* Tres niveles que consten en retar a los usuarios en terminar en menor tiempo.
* Cartas desplegadas con las imagenes al inicio del juego.
¿Cuándo utilizan o utilizarían el producto?
El usuario utilizará este producto en su tiempo de esparcimiento y relajación.
![Historias de usuario ](https://docs.google.com/document/d/1pNSWgYxEXvDQd0jF2U11kylaOHuqDakUroIYnn3NQyU/edit)
## Diseño de la Interfaz de Usuario
#### Prototipo de baja fidelidad
[_Link del jamboard_](https://jamboard.google.com/d/1cAOQWmLtcQxqvtoJGA59K2nT3xcSDsykaHaXYSeO10Y/edit?usp=sharing)
* En este jamboard plasmamos un bosceto basico a diseñar en la cual dará una idea de la estructura del producto.
#### Prototipo de alta fidelidad
[_Link de prototipo de Figma_](https://www.figma.com/file/PxeIvvTkfJTZoR70FzTCmz/prototipo-memory?node-id=41%3A280)
#### Testeos de usabilidad
1.-Hombre de 26 años: Indica que le gusta el aspecto de la página, expresa que es llamativo a la vista. Expresa que es bastante retador para completar.
2.- Mujer de 18 años: Le gusta la temática del juego, el fondo de acuerdo a la temática. No necesita leer las instrucciones para comenzar a jugar. Juega el juego varias veces diciendo que la entretuvo, le gustaría que tenga varios niveles.
prototipo memory
(12 kB)
https://api-cdn.figma.com/resize/thumbnails/a87849f7-27b3-474b-ad7c-560520072a04?height=19&bucket=figma-alpha


* [`pokemon`](./pokemon)
* [`webdev`](./webdev)

Dentro de cada carpeta encontrarás dos archivos: uno con la extensión `.js` y
otro `.json`. Ambos archivos contienen la misma data; la diferencia es que el
`.js` lo usaremos a través de un [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import),
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

## ¿Cómo agrego mis propios sets de cartas?

Éstas no son las únicas cartas que podemos usar. Si quieres puedes añadir los
sets de cartas que consideres para tu aplicación. Si eliges agregar sets de
cartas te recomendamos mantener la misma estructura de los datos (ambos sets de
ejemplo usan la misma estructura).

Por ejmplo, imaginemos que queremos agregar un set de cartas de gatitos. Para
hacernos la vida más fácil, dupliquemos un set existente y modifiquémoslo:

```sh
# Desde el directorio raíz de la aplicación en el terminal, copiamos
# recursivamente (con la opción `-r`, ya que se trata de un directorio) el
# directorio `data/pokemon` a la ruta `data/gatitos`.
cp -r data/pokemon data/gatitos

# Renombramos los archivos de la carpeta gatitos...
mv data/gatitos/pokemon.js data/gatitos/gatitos.js
mv data/gatitos/pokemon.json data/gatitos/gatitos.json
```

Ahora ya puedes editar el contenido de los archivos de gatitos según tus
necesidades. Ten en cuenta que puedes cambiar el número de elementos (cartas) en
cada set si quieres también cambiar la dificultad del juego :wink:.
