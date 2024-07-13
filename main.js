/* -------------------------------------------------------------------------------------- */
/* --------------------------------------> INDEX <--------------------------------------- */
/* -------------------------------------------------------------------------------------- */

// Efecto parallax (parallax.js)
document.addEventListener('DOMContentLoaded', function() {
    let scene = document.getElementById('scene');
    if (scene) {
        let parallaxInstance = new Parallax(scene);
    }

    // Eventos sobre los botones de las redes sociales.
    document.querySelectorAll('.btnRedes').forEach(function(link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Agregar clases de estilo cuando se haga click.
            link.classList.toggle('botonClick');
            if (link.firstElementChild) {
                link.firstElementChild.classList.toggle('iconoClick');
            }

            // Retrasar la apertura de la nueva pestaña.
            setTimeout(() => {
                const href = link.href;
                if (href) {
                    window.open(href, '_blank');
                }
            }, 500); 
        });
    });

    // Botón ingresar para direccionar a la página de login.
    let ingresarButton = document.getElementById('ingresar');
    if (ingresarButton) {
        ingresarButton.addEventListener('click', () => {
            window.location.href = 'pages/login.html';
        });
    }
});
