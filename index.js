document.addEventListener("DOMContentLoaded", function () {

    //Pop-up
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


const corazonSprite = [
    "Imagenes/corazonVacio.png",
    "Imagenes/corazonLlenoPlus.png",
    "Imagenes/corazonLleno.png"
]  

var iconosCorazon = document.getElementsByClassName("iconosCorazon");
var iconosCorazonArray = Array.from(iconosCorazon);

iconosCorazonArray.forEach(function(ico){
    ico.src = corazonSprite[0];
    ico.addEventListener("click", (event)=>{
        cambiarIco(event.target);
    })
})

function cambiarIco(ico){
    let rutaRelativaIco = obtenerRutaRelativa(ico.src);
    let rutaRelativaCorazonFirst = obtenerRutaRelativa(corazonSprite[0]);
    let rutaRelativaCorazonLast = obtenerRutaRelativa(corazonSprite[corazonSprite.length-1]);

    if(rutaRelativaIco == rutaRelativaCorazonFirst){
        let contador = 0; 
        let intervalo = setInterval(() => {
            contador++; 
            ico.src = corazonSprite[contador];
    
            if (contador >= corazonSprite.length-1) { 
                clearInterval(intervalo);
            }
        }, 100); 
    }else if(rutaRelativaIco == rutaRelativaCorazonLast){
        ico.src = corazonSprite[0];
    }
}

function obtenerRutaRelativa(rutaAbsoluta) {
    let partes = rutaAbsoluta.split('/');
    let nombreArchivo = partes[partes.length-2]+"/"+ partes[partes.length-1];
    let rutaRelativa = nombreArchivo;
    return rutaRelativa;
}





