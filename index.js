document.addEventListener("DOMContentLoaded", function () {

    //Pop-up
    var imagenCargar = document.getElementById("imagenCargar");
    var titulo = document.getElementById("staticBackdropLabel");
    var imagenes = document.querySelectorAll("a img")
    var imagenesArray = Array.from(imagenes);

    imagenesArray.forEach(function(imagen) {   
        imagen.setAttribute("megusta", "false");
        imagen.addEventListener("click", (evento)=>{ 
            imagenCargar.src = evento.target.src;
            imagenCargar.alt = evento.target.alt;
            titulo.innerHTML = evento.target.alt;
            if(evento.target.megusta == "true"){
                var megustaText = document.getElementById("megustaText");
                megustaText.style.display = "block";
            }
        })
    });

});


const corazonSprite = [
    "Imagenes/corazon0.png",
    "Imagenes/corazon1.png",
    "Imagenes/corazon2.png",
    "Imagenes/corazon3.png",
    "Imagenes/corazon4.png",
    "Imagenes/corazon5.png",
    "Imagenes/corazon6.png",
    "Imagenes/corazon6.png",
    "Imagenes/corazon6.png",
    "Imagenes/corazon4.png"
]  

var iconosCorazon = document.getElementsByClassName("iconosCorazon");
var iconosCorazonArray = Array.from(iconosCorazon);
var imagenes = document.querySelectorAll("a img")
var imagenesArray = Array.from(imagenes);


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
        }, 20); 
        
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





