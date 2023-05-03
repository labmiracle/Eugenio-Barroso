const carrito = {
    productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5
    },
    {
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
    }],

    
    get precioTotal() {
        return this.productos.reduce((total, producto) => {
            return total + (producto.unidades * producto.precio);
        }, 0)
    }
    }

    console.assert(carrito.precioTotal === 23);