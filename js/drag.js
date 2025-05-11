document.addEventListener('DOMContentLoaded', function() {
    const ventana = document.getElementById('ventanaDraggable');
    const botonCerrar = document.getElementById('cerrarVentana');
    const botonAbrir = document.getElementById('abrirVentana');
    const ventanainfo = document.getElementById('ventanainfo');
  
    // Función para arrastrar la ventana
    function drag(elementToDrag, event) {
      var startX = event.clientX, startY = event.clientY;
      var origX = elementToDrag.offsetLeft, origY = elementToDrag.offsetTop;
      var deltaX = startX - origX, deltaY = startY - origY;
  
      if(document.addEventListener) {
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);
      } else if(document.attachEvent) {
        elementToDrag.setCapture();
        elementToDrag.attachEvent("onmousemove", moveHandler);
        elementToDrag.attachEvent("onmouseup", upHandler);
        elementToDrag.attachEvent("onlosecapture", upHandler);
      } else {
        var oldmovehandler = document.onmousemove;
        var olduphandler = document.onmouseup;
        document.onmousemove = moveHandler;
        document.onmouseup = upHandler;
      }
      
      if(event.stopPropagation) event.stopPropagation();
      else event.returnValue = false; // IE
  
      function moveHandler(e) {
        if(!e) e = window.event; //Modelo de eventos IE
        elementToDrag.style.left = (e.clientX - deltaX) + "px";
        elementToDrag.style.top = (e.clientY - deltaY) + "px";
        if(e.stopPropagation) e.stopPropagation(); 
        else e.cancelBubble = true; 
      }
  
      function upHandler(e) {
        if(!e) e = window.event; 
        if(document.removeEventListener){
          document.removeEventListener("mouseup", upHandler, true);
          document.removeEventListener("mousemove", moveHandler, true);
        } else if(document.detachEvent){ 
          elementToDrag.detachEvent("onlosecapture", upHandler);
          elementToDrag.detachEvent("onmouseup", upHandler);
          elementToDrag.detachEvent("onmousemove", moveHandler);
          elementToDrag.releaseCapture();
        } else {
          document.onmouseup = olduphandler;
          document.onmousemove = oldmovehandler;
        }
        if(e.stopPropagation) e.stopPropagation(); 
        else e.cancelBubble = true; 
      }
    }
  
    ventanainfo.addEventListener('mousedown', function(e) {
      if(e.target === botonCerrar) return;
      drag(ventana, e);
    });
  
    // Cerrar la ventana
    botonCerrar.addEventListener('click', function(e) {
      e.stopPropagation();
      ventana.style.display = 'none';
      botonAbrir.style.display = 'block';
    });
  
    // Abrir la ventana
    botonAbrir.addEventListener('click', function() {
      ventana.style.display = 'block';
      botonAbrir.style.display = 'none';
    });
  });
  