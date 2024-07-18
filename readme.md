# Información:
## Links del proyecto:
```sh
Link del sitio web: https://entregafinal-rodriguezmaria.netlify.app/
Link del repositorio: https://github.com/Fer036/CH-entregaFinal-RodriguezMaria
```

# Objetivo:
```sh
Este sitio web fue creado a partir de las consignas entregadas por el curso CoderHouse, como trabajo final del curso de JavaScript.
```

## Check-list del proyecto:
```sh
- Variables y constantes.
- Condicionales y bucles.
- Funciones.
- Objetos.
- Arrays y métodos de arrays.
- Operadores avanzados.
- DOM y eventos.
- Utilización del LocalStorage. 
- Utilización de librerías.
- Asincronismo con fetch, mediante el consumo de una API.
```

## Librerías utilizadas: 
```sh
Bootstrap: https://getbootstrap.com/
Toastify: https://apvarun.github.io/toastify-js/
SweetAlert: https://sweetalert2.github.io/
Parallax.js: https://matthew.wagerfield.com/parallax/
Progressbar.js: https://kimmobrunfeldt.github.io/progressbar.js/
```

## API utilizada: 
```sh
MARVEL: https://developer.marvel.com/
```

# Descripción de la página: 
```sh
El proyecto está compuesto por una página principal, con parrallax.js aplicado, nombre del proyecto, botón para comenzar (GO!), y tres botones 
que redirigen (en una nueva pestaña) a distintas redes y al repositorio: 
- GitHub: https://github.com/Fer036/
- LinkedIn: https://www.linkedin.com/in/fernanda-rodriguez036/
- Instagram: https://www.instagram.com/mfer.rod/
```

```sh
En segundo lugar, al presionar el botón (GO!), redirige a la página de LogIn. Aquí debe ingresarse usuario y contraseña. Aquí se verifican ambos datos ingresados.
Si el usuario ya existe en el LS, y coloca correctamente la contraseña, visualizará un mensaje de bienvenida.
Si el usuario existe en el LS y coloca incorrectamente la contraseña, visualizará un mensaje de "contraseña incorrecta".
Si el usuario no existe, se crea automáticamente y se almacena en el localStorage.

>> Se verifica: 
- Que el usuario exista en en localStorage, utilizando un nombre clave para el almacenamiento, que no permita recuperar datos que el usuario tenga almacenado anteriormente
desde otro sitio. 

- Que la contraseña y el usuario traidos del LS sean correctos.

- Que se guarden los nuevos usuarios con sus contraseñas.

- Que ambos datos cumplan con las siguientes reglas: no se permiten espacios, y deben contener tres o más caracteres. Esta última se realiza en vivo para que sea dinámico el acceso.  
```

```sh
En tercer lugar, al presionar el boton INGRESAR de la página anterior, ingresa a la tabla de posiciones en dónde se encontrará una lista de usuarios registrados, con su puntaje 
y fecha de su última conexión. La lista se encuentra ordenada de mayor a menor, teniendo como criterio el puntaje de cada uno. 

Cuenta, también, con dos botones: 
- Cerrar sesión: cierra la sesión del usuario, muestra un toast informando el cierre y dirige a la página principal.
- Jugar: Nos dirige a la página del juego. 
```

```sh
Por último, encontramos la página del juego. En donde encontramos 5 personajes diferentes en cards, con las imágenes de cada uno llamadas desde la API MARVEL y un botón de selección.
Al hacer hover sobre las cards, muestra la información del juego de cada personaje. 

Se visualiza un cartel de score, que se actualiza en cada jugada y un contador de rondas que se actualiza de la misma manera.
```

# Juego: 
```sh
El juego mantiene la lógica de la entrega núm 3. Se realizaron los siguientes cambios: 
Nombre de las opciones a elegir, cambios estéticos y adición de las imágenes consumidas de la API.

El jugador elige una opción, cada opción - o card - contiene la información de cómo juega cada personaje. 
La PC elige aleatoriamente una opción para combatir al jugador. Según las instrucciones que contiene cada card, se muestra mediante un toast quién es el ganador, 
además de actualizarse el score de cada uno.
```