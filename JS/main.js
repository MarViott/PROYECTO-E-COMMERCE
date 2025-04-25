//PRODUCTOS
const productos = [
    {
        id: "remera-01",
        titulo: "Ser o No Ser",       
        imagen: "./img/remeras/remera1.png",
        categoria: {
            nombre: "remeras",
            id: "remeras",
        },
         precio: 15000,
        },
    {
        id: "remera-02",
        titulo: "I love art",
        imagen: "./img/remeras/remera2.png",
        categoria: {
            nombre: "remeras",
            id: "remeras",
        },
         precio: 15000,
        },
    {
        id: "remera-03",
        titulo: "Tengo ensayo",
        imagen: "./img/remeras/remera3.png",
        categoria: {
            nombre: "remeras",
            id: "remeras",
        },
         precio: 15000,
        },
    {
        id: "remera-04",
        titulo: "Vamos al teatro",
        imagen: "./img/remeras/remera4.png",
        categoria: {
            nombre: "remeras",
            id: "remeras",
        },
         precio: 15000,
        },
    {
        id: "remera-05",
        titulo: "Soy actriz",
        imagen: "./img/remeras/remera5.png",
        categoria: {
            nombre: "remeras",
            id: "remeras",
        },
         precio: 15000,
        },
    {
        id: "remera-06",
        titulo: "Soy actor",
        imagen: "./img/remeras/remera6.png",
        categoria: {
            nombre: "remeras",
            id: "remeras",
        },
         precio: 15000,
        },
    {
        id: "buzo-01",
        titulo: "To be or not to be",
        imagen: "./img/buzos/buzo1.png",
        categoria: {
            nombre: "buzos",
            id: "buzos",
        },
         precio: 25000,
        },
    {
        id: "buzo-02",
        titulo: "Mascaras",
        imagen: "./img/buzos/buzo2.png",
        categoria: {
            nombre: "buzos",
            id: "buzos",
        },
         precio: 25000,
        },
    {
        id: "buzo-03",
        titulo: "Love Theater",
        imagen: "./img/buzos/buzo3.png",
        categoria: {
            nombre: "buzos",
            id: "buzos",
        },
         precio: 25000,
        },
    {
        id: "buzo-04",
        titulo: "I have casting",
        imagen: "./img/buzos/buzo4.png",
        categoria: {
            nombre: "buzos",
            id: "buzos",
        },
         precio: 25000,
        },
    {
        id: "buzo-05",
        titulo: "I have a casting",
        imagen: "./img/buzos/buzo5.png",
        categoria: {
            nombre: "buzos",
            id: "buzos",
        },
         precio: 25000,
        },
    {
        id: "buzo-06",
        titulo: "I have a function",
        imagen: "./img/buzos/buzo6.png",
        categoria: {
            nombre: "buzos",
            id: "buzos",
        },
         precio: 25000,
        },
    {
        id: "taza-01",
        titulo: "The whole world is a stage",
        imagen: "./img/tazas/taza1.png",
        categoria: {
            nombre: "tazas",
            id: "tazas",
        },
         precio: 8000,
        },
    {
        id: "taza-02",        
        titulo: "Ser o no ser",
        imagen: "./img/tazas/taza2.png",
        categoria: {
            nombre: "tazas",
            id: "tazas",
        },
         precio: 8000,
        },
    {
        id: "taza-03",        
        titulo: "To be or not to be",
        imagen: "./img/tazas/taza3.png",
        categoria: {
            nombre: "tazas",
            id: "tazas",
        },
         precio: 8000,
        },
    {
        id: "taza-04",        
        titulo: "Shakespeare",
        imagen: "./img/tazas/taza4.png",
        categoria: {
            nombre: "tazas",
            id: "tazas",
        },
         precio: 8000,
        },
    {
        id: "taza-05",        
        titulo: "Ser o no ser",
        imagen: "./img/tazas/taza5.png",
        categoria: {
            nombre: "tazas",
            id: "tazas",
        },
         precio: 8000,
        },
    {
        id: "taza-06",        
        titulo: "I love art",
        imagen: "./img/tazas/taza6.png",
        categoria: {
            nombre: "tazas",
            id: "tazas",
        },
         precio: 8000,
        }
    ];
  
//CARGAR PRODUCTOS EN EL HTML
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

    function cargarProductos (productosElegidos) { 
        contenedorProductos.innerHTML = ""; //Limpiamos el contenedor de productos para que no se repitan al filtrar por categoria.
        //Recorremos el array de productos y los mostramos en el HTML
        //con el forEach, por cada producto creamos un div y le agregamos la clase producto
        productosElegidos.forEach(producto => {
            //crea un div para cada producto y le agrega la clase producto
            //le agrega el contenido del producto, imagen, titulo y precio
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                <button id="${producto.id}" class="producto-agregar">Agregar al carrito</button>
                </div>
            `;
            contenedorProductos.append(div);
        })
    }

    cargarProductos(productos);

    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {
            
            botonesCategorias.forEach(boton => boton.classList.remove("active"));
            
            e.currentTarget.classList.add("active");
           
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
           
        })
    })