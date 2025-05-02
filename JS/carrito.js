let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito); //Si hay productos en el local storage, los guardamos en la variable productosEnCarrito

const contenedorCarritoVacio = document.querySelector("#carrito-vacio"); //carritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos"); //carritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones"); //carritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar"); //carritoAccionesVaciar = document.querySelector("#carrito-acciones-vaciar"); //carritoAccionesVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total"); //carritoComprado = document.querySelector("#carrito-comprado"); //carritoComprado = document.querySelector("#carrito-comprado");
const botonComprar = document.querySelector("#carrito-acciones-comprar"); //carritoComprado = document.querySelector("#carrito-comprado"); //carritoComprado = document.querySelector("#carrito-comprado");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
    //Si hay productos en el carrito, mostramos el carrito y ocultamos el carrito vacio
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";
    //Recorremos el array de productos en carrito y creamos un div por cada producto
    //le agregamos la clase carrito-producto y le agregamos el contenido del producto, imagen, titulo, precio y cantidad
        productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h3>${producto.titulo}</h3>
            </div>
            <div class="producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}><i class="bi bi-trash-fill"></i></button>
        `;
        contenedorCarritoProductos.append(div);
        })    
    } else {
        contenedorCarritoVacio.classList.remove("disabled"); 
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();//Actualizamos los botones de eliminar para que funcionen al cargar la pagina
    actualizarTotal(); 
}

cargarProductosCarrito(); //Llamamos a la funcion cargarProductos para que cargue los productos en el carrito al cargar la pagina
//Boton de eliminar productos del carrito

function actualizarBotonesEliminar () {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id; //Obtenemos el id del boton que se presiono
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton); //Buscamos el producto en el carrito
    
    productosEnCarrito.splice(index, 1); //Eliminamos el producto del carrito
    cargarProductosCarrito(); //Llamamos a la funcion cargarProductos para que actualice el carrito
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); //Guardamos el carrito actualizado en el local storage
    
}

//Boton de vaciar carrito

botonVaciar.addEventListener("click", vaciarCarrito); //Agregamos el evento al boton de vaciar carrito
function vaciarCarrito() {
    productosEnCarrito.length = 0; //Vaciamos el carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); //Guardamos el carrito vacio en el local storage
    cargarProductosCarrito(); //Llamamos a la funcion cargarProductos para que actualice el carrito
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`; //Actualizamos el total del carrito
}

//Boton de comprar carrito

botonComprar.addEventListener("click", comprarCarrito); //Agregamos el evento al boton de vaciar carrito
function comprarCarrito() {
    productosEnCarrito.length = 0; //Vaciamos el carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); //Guardamos el carrito vacio en el local storage
     //Llamamos a la funcion cargarProductos para que actualice el carrito
    contenedorCarritoVacio.classList.add("disabled"); 
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}