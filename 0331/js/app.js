personas=[]; // declara el array
document.getElementById('boton').onclick=cargarTabla; // asigno la funcion limpiarTabla al evento click del boton
window.onload=iniciarApp;
function iniciarApp()
{
  cargarDatos();
}


function cargarDatos() // carga datos de prueba al array Persona
{
  console.log("cargando datos...");
  personas.push({"nombre": "Rafael", "apellido":"Escobar", "docnro":"4584860", "fenac":"1998/09/14" });
  personas.push({"nombre": "Lizandro", "apellido":"Britto", "docnro":"5610802", "fenac":"2002/11/20" });
  personas.push({"nombre": "Jazmin", "apellido":"Meza", "docnro":"6038277", "fenac":"2003/04/14" });
}

//console.log(personas);
//iniciarApp();
function limpiarTabla() //limpia el contenido html de datos
{
//  var salida=document.getElementById('tab_datos').innerHTML;
  document.getElementById('tab_datos').innerHTML="";
  console.log("limpiando");
}
function cargarTabla()
  {
    console.log("cargando");
    salida="";
    for (var i = 0; i < personas.length; i++) {
        console.log("girando");
        salida=salida+"<tr><td>"+i+"</td><td>"+personas[i].docnro+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].fenac+"</td></tr>"
        //console.log(salida);
      }
      document.getElementById('tab_datos').innerHTML=salida;
  }
//  cargarDatos();
