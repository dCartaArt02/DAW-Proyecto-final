prueba = "Esta ventana es arrastrable puedes colocarla en cualquier lugar que quieras, acerca el cursor a un departamento para visualizar informacion basica";
const pathid1 = document.getElementById('SV-CA'); //cabañas
const pathid2 = document.getElementById('SV-CH');//chalatenango
const pathid3 = document.getElementById('SV-CU');//cuscatlan
const pathid4 = document.getElementById('SV-LI');//la libertad
const pathid5 = document.getElementById('SV-MO');//morazan
const pathid6 = document.getElementById('SV-PA');//la paz
const pathid7 = document.getElementById('SV-SA');//santa ana
const pathid8 = document.getElementById('SV-SM');//san miguel
const pathid9 = document.getElementById('SV-SO');//sonsonate
const pathid10 = document.getElementById('SV-SS');//san salvador
const pathid11 = document.getElementById('SV-SV');//san vicente
const pathid12 = document.getElementById('SV-UN');//la union
const pathid13 = document.getElementById('SV-US');//usulutan
const pathid14 = document.getElementById('SV-AH');//ahuachapan
const reset = document.getElementById('tuqui');

const arraydep = [prueba];
const contenedorarray = document.getElementById("contenedor");
arraydep.forEach((valor) =>{
    const p = document.createElement("p");
    p.innerHTML = valor;
    contenedorarray.appendChild(p);
});

function actualizador(){
    const contenedorarray = document.getElementById("contenedor");
    contenedorarray.innerHTML = "";
    const p = document.createElement("p");
    arraydep.forEach((valor) => {
        p.innerHTML = valor;
        contenedorarray.appendChild(p);
    }
)};
document.addEventListener('mouseleave', (event) => {
      prueba = "Esta ventana es arrastrable puedes colocarla en cualquier lugar que quieras, acerca el cursor a un departamento para visualizar informacion basica";
      arraydep[0] = prueba; 
      actualizador(); 
  }, true); 
pathid1.addEventListener ('mouseover', () =>{
    prueba = `<h3>Cabañas</h3>
    <strong>Cabecera departamental</strong><br>
    Sensuntepeque<br>
    <strong>Extensión territorial</strong><br>
    1,104 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -12 de Mayo<br>
    -26 de Septiembre<br>
    -20 de Octubre<br>
    -24 de Noviembre<br>
    -04 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    143,049 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid2.addEventListener ('mouseover', () =>{
    prueba = `<h3>Chalatenango</h3>
    <strong>Cabecera departamental</strong><br>
    Chalatenango<br>
    <strong>Extensión territorial</strong><br>
    2,017 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -25 de Enero<br>
    -10 de Febrero<br>
    -19 de Marzo<br>
    -23 de Julio<br>
    -02 de Octubre<br>
    -01 de Diciembre<br>
    -06 de Diciembre<br>
    -18 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    185,930 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid3.addEventListener ('mouseover', () =>{
    prueba = `<h3>Cuscatlán</h3>
    <strong>Cabecera departamental</strong><br>
    Cojutepeque<br>
    <strong>Extensión territorial</strong><br>
    756.2 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -15 de Enero<br>
    -20 de Julio<br>
    -06 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    244,901 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid4.addEventListener ('mouseover', () =>{
    prueba = `<h3>La Libertad</h3>
    <strong>Cabecera departamental</strong><br>
    Santa Tecla<br>
    <strong>Extensión territorial</strong><br>
    1,653 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -13 de Enero<br>
    -24 de Abril<br>
    -15 de Septiembre<br>
    -27 de Septiembre<br>
    -11 de Octubre<br>
    -01 de Diciembre<br>
    -07 de Diciembre<br>
    -12 de Diciembre<br>
    -16 de Diciembre<br>
    -20 de Diciembre<br>
    -20 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    765,879 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid5.addEventListener ('mouseover', () =>{
    prueba = `<h3>Morazán</h3>
    <strong>Cabecera departamental</strong><br>
    San Francisco Gotera<br>
    <strong>Extensión territorial</strong><br>
    1,447 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -18 de Enero<br>
    -21 de Enero<br>
    -27 de Junio<br>
    -01 de Octubre<br>
    -04 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    169,784 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid6.addEventListener ('mouseover', () =>{
    prueba = `<h3>La paz</h3>
    <strong>Cabecera departamental</strong><br>
    Zacatecoluca<br>
    <strong>Extensión territorial</strong><br>
    1,224 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -18 de Febrero<br>
    -23 de Junio<br>
    -20 de Julio<br>
    -10 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    552,938 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid7.addEventListener ('mouseover', () =>{
    prueba = `<h3>Santa Ana</h3>
    <strong>Cabecera departamental</strong><br>
    Santa Ana Centro<br>
    <strong>Extensión territorial</strong><br>
    2,023 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -31 de Enero<br>
    -25 de Junio<br>
    -01 de Julio<br>
    -25 de Noviembre<br>
    -25 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    552,938 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid8.addEventListener ('mouseover', () =>{
    prueba = `<h3>San Miguel</h3>
    <strong>Cabecera departamental</strong><br>
    San Miguel Centro<br>
    <strong>Extensión territorial</strong><br>
    2,077 km²²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -30 de Enero<br>
    -22 de Abril<br>
    -25 de Julio<br>
    -08 de Agosto<br>
    -14 de Noviembre<br>
    <strong>Número de habitantes</strong><br>
    447,634 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid9.addEventListener ('mouseover', () =>{
    prueba = `<h3>Sonsonante</h3>
    <strong>Cabecera departamental</strong><br>
    Sonsonate Centro<br>
    <strong>Extensión territorial</strong><br>
    1,226 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -08 de Enero<br>
    -22 de Enero<br>
    -25 de Enero<br>
    -22 de Mayo<br>
    -19 de Junio<br>
    -23 de Junio<br>
    -01 de Agosto<br>
    -07 de Agosto<br>
    -25 de Agosto<br>
    -07 de Noviembre<br>
    -20 de Noviembre<br>
    <strong>Número de habitantes</strong><br>
    470,455 habitantes<br>
    `;
    arraydep[0] = prueba;
    actualizador();
} );
pathid10.addEventListener ('mouseover', () =>{
    prueba = `<h3>San Salvador</h3>
    <strong>Cabecera departamental</strong><br>
    San Salvador<br>
    <strong>Extensión territorial</strong><br>
    886,15 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -25 de Enero<br>
    -16 de Marzo<br>
    -24 de Abril<br>
    -25 de Julio<br>
    -01 de Agosto<br>
    -12 de Agosto<br>
    -12 de Septiembre<br>
    -26 de Septiembre<br>
    -11 de Octubre<br>
    -01 de Noviembre<br>
    -13 de Noviembre<br>
    <strong>Número de habitantes</strong><br>
    1,563,371 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
} );
pathid11.addEventListener ('mouseover', () =>{
    prueba = `<h3>San Vicente</h3>
    <strong>Cabecera departamental</strong><br>
    San Vicente<br>
    <strong>Extensión territorial</strong><br>
    1,184 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -23 de Enero<br>
    -17 de Marzo<br>
    -15 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    161,857 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
});
pathid12.addEventListener ('mouseover', () =>{
    prueba = `<h3>La Unión</h3>
    <strong>Cabecera departamental</strong><br>
    La Unión Sur<br>
    <strong>Extensión territorial</strong><br>
    2,074 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -13 de Enero<br>
    -18 de Enero<br>
    -17 de Marzo<br>
    -22 de Agosto<br>
    -03 de Diciembre<br>
    -06 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    224,375 habitantes<br>`;
    arraydep[0] = prueba;
    actualizador();
});
pathid13.addEventListener ('mouseover', () =>{
    prueba = `<h3>Usulután</h3>
    <strong>Cabecera departamental</strong><br>
    Usulután<br>
    <strong>Extensión territorial</strong><br>
    2,130 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -15 de Marzo<br>
    -23 de Marzo<br>
    -10 de Mayo<br>
    -19 de Julio<br>
    -20 de Septiembre<br>
    -26 de Septiembre<br>
    <strong>Número de habitantes</strong><br>
    325,494 habitantes <br>`;
    arraydep[0] = prueba;
    actualizador();
});
pathid14.addEventListener ('mouseover', () =>{
  
    prueba = `<h3>Ahuachapan</h3>
    <strong>Cabecera departamental</strong><br>
    Ahuachapán Centro<br>
    <strong>Extensión territorial</strong><br>
    1,240 km²<br>
    <strong>Fecha de fiestas patronales</strong><br>
    -05 de Febrero<br>
    -17 de Marzo<br>
    -17 de Julio<br>
    -29 de Noviembre<br>
    -27 de Noviembre<br>
    -15 de Diciembre<br>
    <strong>Número de habitantes</strong><br>
    348,880 habitantes<br>
    `;
    arraydep[0] = prueba;
    actualizador();
});
tituloA();
actualizador();



