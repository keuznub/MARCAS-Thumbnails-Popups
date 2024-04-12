document.addEventListener("DOMContentLoaded", function () {
    /*Hecho gracias a chatgpt copiando y viendo como se hace, es más, tuve que 
  corregirlo manualmente poniendo window.scrollY en el tooltip.style.top sino iba mal*/
    var imagenesContainer = document.getElementById("myCarousel2")
    var imagenes = imagenesContainer.querySelectorAll(".tooltip-img");
  
    imagenes.forEach(function (img) {
      var tooltip = document.createElement("div");
      var nombreImagen = img.getAttribute("src");
      var segments = nombreImagen.split("/");
      var fileNameWithExtension = segments[segments.length - 1];
      var nombrePiloto = fileNameWithExtension.split(".")[0];
      nombrePiloto = nombrePiloto.charAt(0).toUpperCase() + nombrePiloto.slice(1);
  
      tooltip.id = "tooltip";
      tooltip.innerText = "Haz click para ir a los resultados de " + nombrePiloto;
      document.body.appendChild(tooltip);
  
      img.addEventListener("mouseover", function (event) {
        tooltip.style.display = "block";
      });
  
      img.addEventListener("mouseout", function (event) {
        tooltip.style.display = "none";
      });
  
      img.addEventListener("mousemove", function (event) {
        tooltip.style.top = event.clientY + window.scrollY + 10 + "px";
        tooltip.style.left = event.clientX + 10 + "px";
      });
    });
  
  });