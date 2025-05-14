// 1) Carga inicial de datos:
let departmentsData = {};
fetch('assets/data/departments.json')
  .then(res => res.json())
  .then(json => { departmentsData = json; });

// 2) Captura de elementos del DOM:
const input = document.getElementById('deptSearch');
const resultsList = document.getElementById('deptResults');

// 3) Escucha de cambios en el input:
input.addEventListener('input', () => {
  const query = input.value.trim();
  //  └─ quitamos espacios en blanco alrededor

  if (!query) {
    resultsList.innerHTML = '';
    return;
  }

  // 4) Construcción de la RegExp (insensible a mayúsculas/minúsculas):
  //    Escapamos caracteres especiales del usuario para evitar errores.
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, 'i');

  // 5) Filtrado: buscamos en el código (id) y en el nombre
  const matches = Object.values(departmentsData).filter(dept =>
    regex.test(dept.id) || regex.test(dept.name)
  );

  // 6) Renderizado de resultados
  resultsList.innerHTML = matches
    .map(dept => `<li><strong>${dept.id}</strong> – ${dept.name}</li>`)
    .join('');

  if (matches.length === 0) {
    resultsList.innerHTML = '<li>No se encontraron departamentos.</li>';
  }
});