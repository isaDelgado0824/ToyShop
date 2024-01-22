// PRODUCTOS
const productos = [
    // JUGUETES
    {
        id: "juguete-01",
        titulo: "Robot",
        imagen: "./img/infantil/1.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 30000
    },
    {
        id: "juguete-02",
        titulo: "Caja Registradora",
        imagen: "./img/infantil/2.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 25000
    },
    {
        id: "juguete-03",
        titulo: "Automóvil",
        imagen: "./img/infantil/3.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 20000
    },
    {
        id: "juguete-04",
        titulo: "Caballo Mecedor",
        imagen: "./img/infantil/4.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 20000
    },
    {
        id: "juguete-05",
        titulo: "Pato de Hule",
        imagen: "./img/infantil/5.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 80000
    },
    {
        id: "juguete-06",
        titulo: "Tren de Bloques",
        imagen: "./img/infantil/6.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 15000
    },
    {
        id: "juguete-07",
        titulo: "Juego de Cocina",
        imagen: "./img/infantil/7.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 17000
    },
    {
        id: "juguete-08",
        titulo: "Triciclo",
        imagen: "./img/infantil/8.png",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 50000
    },
    //JUEGOS DE MESA
    {
        id: "juego-01",
        titulo: "Ajedrez",
        imagen: "./img/juegosDeMesa/1.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 20000
    },
    {
        id: "juego-02",
        titulo: "Monopoly",
        imagen: "./img/juegosDeMesa/2.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 35000
    },
    {
        id: "juego-03",
        titulo: "Triqui",
        imagen: "./img/juegosDeMesa/3.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 15000
    },
    {
        id: "juego-04",
        titulo: "Naipes",
        imagen: "./img/juegosDeMesa/4.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 12000
    },
    {
        id: "juego-05",
        titulo: "Rompecabezas",
        imagen: "./img/juegosDeMesa/5.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 7000
    },
    {
        id: "juego-06",
        titulo: "Scramble",
        imagen: "./img/juegosDeMesa/6.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 25000
    },
    {
        id: "juego-07",
        titulo: "Mahjong",
        imagen: "./img/juegosDeMesa/7.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 30000
    },
    {
        id: "juego-08",
        titulo: "Tablero de Dardos",
        imagen: "./img/juegosDeMesa/8.png",
        categoria: {
            nombre: "Juegos de mesa",
            id: "juegosDeMesa"
        },
        precio: 10000
    },
    // PELUCHES
    {
        id: "peluche-01",
        titulo: "Moncho el Oso",
        imagen: "./img/peluches/1.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 20000
    },
    {
        id: "peluche-02",
        titulo: "Marta la Gata",
        imagen: "./img/peluches/2.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 15000
    },
    {
        id: "peluche-03",
        titulo: "Pepe el Monstruo",
        imagen: "./img/peluches/3.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 30000
    },
    {
        id: "peluche-04",
        titulo: "Jorge el Perro",
        imagen: "./img/peluches/4.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 20000
    },
    {
        id: "peluche-05",
        titulo: "Javi el León",
        imagen: "./img/peluches/5.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 25000
    },
    {
        id: "peluche-06",
        titulo: "Emoji Nerd",
        imagen: "./img/peluches/6.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 25000
    },
    {
        id: "peluche-07",
        titulo: "Nando el Cocodrilo",
        imagen: "./img/peluches/7.png",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 28000
    },
    {
        id: "peluche-08",
        titulo: "Corazón",
        imagen: "./img/peluches/8.png", 
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 15000
    }
]

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategoria = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
const numerito = document.querySelector('#numerito');
let botonesAgregar = document.querySelectorAll('.producto-agregar');

function limpiarHTML(){
    while(contenedorProductos.firstChild){
        contenedorProductos.removeChild(contenedorProductos.firstChild);
    }
}

function cargarProductos(productosElegidos) {


    productosElegidos.forEach(producto => {

        const div = document.createElement('DIV');
        div.classList.add("producto")
        div.innerHTML = `
            <div class="producto">
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$ ${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            </div>
        `; 

        contenedorProductos.appendChild(div);
    });

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {

        limpiarHTML();

        botonesCategoria.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== 'todos'){

            const productosCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            const nombreCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.textContent = nombreCategoria.categoria.nombre;

            cargarProductos(productosCategoria);

        }else{

            tituloPrincipal.textContent = "Todos los productos";

            cargarProductos(productos); 
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.producto-agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    });
};

let productosCarrito;
const productosCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosCarritoLS) {
    productosCarrito = JSON.parse(productosCarritoLS);
    actualizarNumerito();
} else {
    productosCarrito = [];
}


function agregarAlCarrito(e){
    const id = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === id);
    
    if(productosCarrito.some(producto => producto.id === id)) {
        const index = productosCarrito.findIndex(producto => producto.id === id);
        productosCarrito[index].cantidad++;
    } else {
        productosCarrito.push(productoAgregado);
        productoAgregado.cantidad = 1;
    };
    
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.textContent = nuevoNumerito;
}