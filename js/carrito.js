let productosCarrito = localStorage.getItem("productos-en-carrito");
productosCarrito = JSON.parse(productosCarrito);

const contenedorCarritoVacio = document.querySelector('#carrito-vacio');
const contenedorCarritoProductos = document.querySelector('#carrito-productos');
const contenedorCarritoAcciones = document.querySelector('#carrito-acciones');
const contenedorCarritoComprado = document.querySelector('#carrito-comprado');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar = document.querySelector('#carrito-acciones-vaciar');
const botonComprar = document.querySelector('#carrito-acciones-comprar');
const total = document.querySelector('#total');


function cargarProductosCarrito() {
    if (productosCarrito && productosCarrito.length > 0) {

        contenedorCarritoVacio.classList.add('disabled');
        contenedorCarritoProductos.classList.remove('disabled');
        contenedorCarritoAcciones.classList.remove('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    
        contenedorCarritoProductos.innerHTML = ""
    
        productosCarrito.forEach(producto => {
    
            // const subtotal = calcularSubtotal(producto.precio, producto.cantidad);
    
            const div = document.createElement('DIV');
            div.classList.add('carrito-producto');
    
            div.innerHTML = `
                <img class="carrito-producto-imagen"src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-información carrito-producto-titulo">
                    <small>Nombre</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-información carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <h3>${producto.cantidad}</h3>
                </div>
                <div class="carrito-producto-información carrito-producto-precio">
                    <small>Precio</small>
                    <h3>${producto.precio}</h3>
                </div>
                <div class="carrito-producto-información carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <h3>$${producto.precio * producto.cantidad}</h3>
                </div>
                <button id=${producto.id} class="carrito-producto-eliminar"><i class="bi bi-trash"></i></button>
            `
    
            contenedorCarritoProductos.appendChild(div);
            
        });
    } else {
        contenedorCarritoVacio.classList.remove('disabled');
        contenedorCarritoProductos.classList.add('disabled');
        contenedorCarritoAcciones.classList.add('disabled');
        contenedorCarritoComprado.classList.add('disabled');
    }

    actualizarBotonesEliminar();
    actualizarTotal()
}

cargarProductosCarrito();



function actualizarBotonesEliminar() {
    botonesAgregar = document.querySelectorAll('.carrito-producto-eliminar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', eliminarProducto)
    });
};

function eliminarProducto(e){
    id = e.currentTarget.id;
    const index = productosCarrito.findIndex(producto => producto.id === id);

    productosCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito))
}

botonVaciar.addEventListener('click', vaciarCarrito);
function vaciarCarrito() {
    productosCarrito.length = 0; 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.textContent = `$${totalCalculado}`;
}

botonComprar.addEventListener('click', comprarCarrito);
function comprarCarrito() {
    productosCarrito.length = 0; 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    
    contenedorCarritoVacio.classList.add('disabled');
    contenedorCarritoProductos.classList.add('disabled');
    contenedorCarritoAcciones.classList.add('disabled');
    contenedorCarritoComprado.classList.remove('disabled');
}

// function calcularSubtotal(precio, cantidad) {
//     precio * cantidad;
// }
