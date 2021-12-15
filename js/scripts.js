/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Creacion de productos con JS 

function Planta(nombre, precio,imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
}

const producto1 = new Planta("Rosario", "$200 - $250 ", "rosario")
const producto2 = new Planta("Planta Fantasma", "$250 - $300", "PlantaFantasma")
const producto3 = new Planta("Planta cebra", "$300 - $500", "plantaCebra")
const producto4 = new Planta("Aeonium Kiwi", "$200 - $350", "aeoniumKiwi")
const producto5 = new Planta("Echeveria runyonii", "$250 - $350", "echeveriaRunyonii")
const producto6 = new Planta("Haworthia Retusa", "$150 - $250", "haworthiaRetusa")
const producto7 = new Planta("Cordón de San Jose", "$450", "cordonSanJose")
const producto8 = new Planta("Aeonium Haworthii", "$250 - $350", "aeoniumHaworthii")
const producto9 = new Planta("Graptosedum Francesco Baldi", "$200 - $300", "graptosedumFrancesco")
const producto10 = new Planta("  -  ", "$250 - $350", "desconocida1")
const producto11 = new Planta("  -  ", "$250", "desconocida2")
const producto12 = new Planta("  -  ", "$200", "desconocida3")
const producto13 = new Planta("  -  ", "$250", "desconocida4")
const producto14 = new Planta("  -  ", "$350", "desconocida5")
const producto15 = new Planta("Aeonium Haworthii - Grande", "$500", "aeoniumHaworthii2")
const producto16 = new Planta("  -  ", "$280", "cactus1")
const producto17 = new Planta("  -  ", "$280", "cactus2")
const producto18 = new Planta("Echeveria 'Topsy Turvy' ", "$350", "echeveriaTopsyTurvy")
const producto19 = new Planta("Haworthia Reinwardtii", "$350", "haworthiaReinwardtii")

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12,producto13, producto14,producto15, producto16, producto17, producto18, producto19]

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="col mb-5" style= "border: solid 2.5px gray; border-radius: 5px;">
                                <div class="card h-100">
                                    <img class="card-img-top" src="imagenes/${producto.imagen}.jpg" alt="..." />
                                    <div class="card-body p-4">
                                        <div class="text-center">
                                            <h5 class="fw-bolder"> ${producto.nombre} </h5>
                                            <p> ${producto.precio} </p>
                                        </div>
                                    </div>
                                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" style= "display: none">
                                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>`;
    document.getElementById("containerProductos").appendChild(contenedor);
}