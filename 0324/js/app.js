// function carga()
// {

  // console.log("test") ;
  // var valor=5;
  // console.log(valor);
//  valor="philipe"+1;
  // valor=valor+1
  //   console.log(valor);
  //   if (valor==1) {
  //     console.log(valor);
  //   } else {
  //     console.log(valor);
  //   }
  //
  //   while (valor>1) {
  //      valor--;
  //      console.log("en while");
  //   }
  //   for (var i = 0; i < 5; i++) {
  //      console.log("en for");
  //   }
// }
  //alert("aler");

// function suma (a,b)
// {
//  var s=a+b;
//  return s;
// }

function suma ()
{
 var s=0;
 var nros=[1,2,4,5,6,8];
 for (var i=0; i<nros.length;i++ )
   {
     s=s+nros[i];
   }
 return s;
}
var lista=[];
lista=[1,2,3];
//console.log(lista);
lista[2]=5;
//console.log(lista);
personas= {'nombre': 'luis', "apellido":"lopez" };
lista.push(personas);
//console.log(personas[0]);
lista[3]['nombre']="carlos";
for (var i=0; i<lista.length;i++ )
  {
  //  console.log(lista[i]);
  }
  var i=0;
  while ( i<lista.length )
    {
      if (isNaN(lista[i])) {
    //  console.log(lista[i]);
      }
      i++;
    }
//var suma=suma("hola ",9);
var suma=suma();
console.log(suma);

//console.log(lista);
