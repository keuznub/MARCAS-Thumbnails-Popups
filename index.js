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


document.addEventListener("DOMContentLoaded", function () {

    //Pop-up
    var imagenCargar = document.getElementById("imagenCargar");
    var titulo = document.getElementById("staticBackdropLabel");
    var imagenes = document.querySelectorAll("a img")
    var imagenesArray = Array.from(imagenes);
    var iconosCorazon = document.getElementsByClassName("iconosCorazon");
    var iconosCorazonArray = Array.from(iconosCorazon);
    var contador1 = 0;


    imagenesArray.forEach(function(imagen) {   
        imagen.setAttribute("megusta", "false");
        imagen.addEventListener("click", (evento)=>{ 
            imagenCargar.src = evento.target.src;
            imagenCargar.alt = evento.target.alt;
            titulo.innerHTML = evento.target.alt;
            if(evento.target.getAttribute("megusta") == "true"){
                console.log("es true!!!");
                var megustaText = document.getElementById("megustaText");
                megustaText.style.display = "block";
            }else{
                console.log("es false!!!" + evento.target.getAttribute("megusta"));
                var megustaText = document.getElementById("megustaText");
                megustaText.style.display = "none";
            }
        })
    });

    iconosCorazonArray.forEach(function(ico) {
        var imagen = imagenesArray[contador1];
        ico.src = corazonSprite[0];
        console.log("iteracion: " + " icono: " + ico + " imagen:  " + imagen);
        ico.addEventListener("click", (event)=>{
            cambiarIco(event.target);      
            if(imagen.getAttribute("megusta") == "false"){
                imagen.setAttribute("megusta" , "true");
            }else{
                imagen.setAttribute("megusta" , "false");
            }
            console.log("Atributo megusta de la imagen : " + imagen.getAttribute("megusta"));
        })
        contador1++;
    });




/*
    for(var i = 0; i<iconosCorazonArray.length;i++){
        var ico = iconosCorazonArray[i];
        var imagen = imagenesArray[i];
        ico.src = corazonSprite[0];
        console.log("iteracion: " + i + " icono: " + ico + " imagen:  " + imagen);
        ico.addEventListener("click", (event)=>{
            cambiarIco(event.target);      
            if(imagen.getAttribute("megusta") == "false"){
                imagen.setAttribute("megusta" , "true");
            }else{
                imagen.setAttribute("megusta" , "false");
            }
            console.log("Atributo megusta de la imagen "+ i + ": " + imagen.getAttribute("megusta"));
    })
    }
*/

});




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





