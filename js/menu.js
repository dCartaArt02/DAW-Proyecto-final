document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-submenu > a.dropdown-toggle').forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();    
        const submenu = element.nextElementSibling;
        // Obtiene el contenedor de los submenús para poder cerrar los que estén abiertos
        const parentMenu = element.closest('.dropdown-menu');    
        // Cierra todos los submenús hermanos que estén abiertos, excepto el actual
        parentMenu.querySelectorAll('.dropdown-menu.show').forEach(function(openSubmenu) {
          if (openSubmenu !== submenu) {
            openSubmenu.classList.remove('show');
          }
        });
        submenu.classList.toggle('show');
      });
    });
    
    //  Al cerrar el dropdown principal se cierran todos los submenús
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
      dropdown.addEventListener('hide.bs.dropdown', function() {
        dropdown.querySelectorAll('.dropdown-menu.show').forEach(function(submenu) {
          submenu.classList.remove('show');
        });
      });
    });
  });
  