let automoviles = [];
// creamos el constructor de Automovil y agregamos funciones
function Automovil(marca,modelo,color,anio,titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
    alert("Este vehiculo se ha vendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} ${this.titular}`; 
}

Automovil.prototype.encenderAutomovil = function(){
    alert ("El automóvil esta en marcha");
}

// Esta funcion es llamada al cargar la página, crea los automoviles y los agrega en un array
function crearAutomoviles(){
    automovil1 = new Automovil("Ford","Fiesta","negro",2023,"Camilo");
    automovil2 = new Automovil("Renault","Duster","blanco",2019,"Emiliano");
    automovil3 = new Automovil("Chevrolet","Groove","gris",2020,"Camila");

    automoviles.push(automovil1);
    automoviles.push(automovil2);
    automoviles.push(automovil3);
}

// Esta función muestra a todos los automoviles creados
function verAutomiviles(){
    let listaAutomoviles = document.getElementById("listaVehiculos");
    for(x of automoviles){
        let item = document.createElement("li");
        let mensaje = x.verAutomovil();
        item.innerText = mensaje
        listaAutomoviles.appendChild(item);
    }
}

