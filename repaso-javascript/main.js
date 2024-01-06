//alert ('Hola Mundo');

var nombre = "Jesus Leyva";
var altura = 190;
var concatenacion = nombre + " " + altura; 

//document.write(nombre);
//document.write(altura);
//document.write(concatenacion);

var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;

datos.innerHTML +=`
    <h1> Soy una caja de datos </h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3>Mido: ${altura} </h3>
`;


if(altura >= 190 ){
    datos.innerHTML += ` <h1>Eres una persona alta</h2>`
}else{
    datos.innerHTML += ` <h1>Eres una persona bajita</h2>`
}

for(var i = 2020; i <=2023; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i +"</h2>";
}

function MuestramiNombre(nombre, altura){
    var misdatos =`
        <h1> Soy una caja de datos </h1>
        <h2>Mi nombre es: ${nombre} </h2>
        <h3>Mido: ${altura} </h3>
`;
return misdatos;
}

function imprimir(){
    datos.innerHTML += MuestramiNombre("Jesus Leyva", 190)
}

imprimir();

//MuestramiNombre("Jesus Leyva", 190);


var nombres = ['Victor', 'Jesus','Antonio'];

document.write('<h1> Listado de nombres: </h1>');
/*
for(i=0; i < nombres.length; i++){
        document.write(nombres[i] + '<br/>');
}
*/
nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
});

nombres.forEach((nombre)=>{
    document.write(nombre + '<br/>');
});