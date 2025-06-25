// Esto es un comentario en JavaScript

// 1. Seleccionamos el botón del HTML usando su 'id'.
// 'document' se refiere a todo el documento HTML.
// 'getElementById' busca un elemento que tenga el id "boton-contacto".
const botonContacto = document.getElementById('boton-contacto');

// 2. Le decimos al botón que "escuche" por un evento de tipo 'click'.
// Cuando ocurra el clic, ejecutará la función que le pasamos.
botonContacto.addEventListener('click', function() {
    
    // 3. Cuando se hace clic, se ejecuta este código.
    // 'alert' muestra una pequeña ventana emergente en el navegador.
    alert('¡Puedes contactarme en miemail@ejemplo.com!'); 
    // ¡Cambia esto por tu email real!

});

// ¡Y eso es todo! Con esto, tu página ya tiene interactividad.
console.log("¡La página ha cargado y el script está funcionando!");
// El console.log es un mensaje que solo se ve en las herramientas de desarrollador del navegador (presiona F12). Es muy útil para depurar.