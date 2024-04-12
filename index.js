document.addEventListener("DOMContentLoaded", function () {
    var imagenCargar = document.getElementById("imagenCargar");
    var titulo = document.getElementById("staticBackdropLabel");
    var imagenes = document.getElementsByTagName("img");
    var imagenesArray = Array.from(imagenes);

    imagenesArray.forEach(function(imagen) {   
        imagen.addEventListener("click", (evento)=>{ 
            imagenCargar.src = evento.target.src;
            imagenCargar.alt = evento.target.alt;
            titulo.innerHTML = evento.target.alt;
        })
    });
});



