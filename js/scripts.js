/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Creacion de productos con JS 

function Planta(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Planta("Rosario", "$200 - $250 ")
const producto2 = new Planta("Planta Fantasma", "$250 - $300")
const producto3 = new Planta("Planta cebra", "$300 - $500")
const producto4 = new Planta("Aeonium Kiwi", "$200 - $350")
const producto5 = new Planta("Echeveria runyonii", "$250 - $350")
const producto6 = new Planta("Haworthia Retusa", "$150 - $250")
const producto7 = new Planta("Cordón de San Jose", "450")
const producto8 = new Planta("Aeonium Haworthii", "$250 - $350")
const producto9 = new Planta("Graptosedum Francesco Baldi", "$200 - $300")
const producto10 = new Planta("  -  ", "$250 - $350")
const producto11 = new Planta("  -  ", "$250")
const producto12 = new Planta("  -  ", "$200")

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="col mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="assets/aeoniumKiwi.jpg" alt="..." />
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