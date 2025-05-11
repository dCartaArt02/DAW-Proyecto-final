document.addEventListener('DOMContentLoaded', function() 
{
    const formContacto = document.getElementById('formContacto');
  
    formContacto.addEventListener('submit', function(event) 
    {
      if (!validarFormulario()) 
      {
        event.preventDefault();
      }
    });
});
  
function validarFormulario() 
{
    const mensajeErrorDiv = document.getElementById('mensajeError');
    mensajeErrorDiv.textContent = '';
  
    const nombre     = document.getElementById('nombre');
    const apellidos  = document.getElementById('apellidos');
    const direccion  = document.getElementById('direccion');
    const email      = document.getElementById('email');
    const telefono   = document.getElementById('telefono');
    const mensaje    = document.getElementById('mensaje');
  
    let hayError = false;
  
    [nombre, apellidos, direccion, email, telefono, mensaje].forEach(campo => 
    {
        campo.classList.remove('error');
    });
  
    if (nombre.value.trim() === '') 
    {
        nombre.classList.add('error');
        hayError = true;
    }
  
    if (apellidos.value.trim() === '') 
    {
        apellidos.classList.add('error');
        hayError = true;
    }
  
    if (direccion.value.trim() === '') 
    {
        direccion.classList.add('error');
        hayError = true;
    }
  
    if (email.value.trim() === '') 
    {
        email.classList.add('error');
        hayError = true;
    } 
    else 
    {
        const patronEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!patronEmail.test(email.value.trim())) 
        {
            email.classList.add('error');
            mensajeErrorDiv.textContent = 'Por favor, ingresa un correo válido.';
            hayError = true;
        }
    }
  
    if (telefono.value.trim() === '') 
    {
        telefono.classList.add('error');
        hayError = true;
    }
    else
    {
        const patronTelefono = /^[0-9]{8}$/;
        if (!patronTelefono.test(telefono.value.trim())) 
        {
            telefono.classList.add('error');
            mensajeErrorDiv.textContent = 'El teléfono debe contener 8 dígitos.';
            hayError = true;
        }
    }
  
    if (hayError) 
    {
        if (!mensajeErrorDiv.textContent) 
        {
            mensajeErrorDiv.textContent = 'Por favor, revisa los campos marcados.';
        }
        return false;
    }
  
    alert('Formulario enviado exitosamente.');
    return true;
}
