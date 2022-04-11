     
class Producto {
    constructor(id, name, price) {
        this.id = id
        this.name = name.toUpperCase()
        this.price = parseFloat(price)
    }

    addIVA() {
        this.price = this.price * 1.21
    }
}

const productos = [
    {id: 1, name: 'Llave cruz', price: 1500},
    {id: 2, name: 'Refrigerante', price: 850},
    {id: 3, name: 'Destornillador', price: 500},
    {id: 4, name: 'Bidón de aceite', price: 2500},
]

let productosObjeto = []

// Función para ingreso a la tienda y lista de productos

function ingreso1() {
    let ingreso = prompt('¿Desea ingresar a la tienda online y ver la lista de productos? Por favor ingrese SI o NO').toUpperCase();

    whileDeIngreso:
    while(ingreso != 'NO') {
        switch(ingreso) {
            case 'SI':
                alert('Este es nuestro listado de productos: id 1) Llave cruz - $1.500.-; id 2) Refrigerante - $850.-; id 3) Destornillador - $500; id 4) Bidón de aceite Elaion - $2.500.-')
                comprarProductos();
                break whileDeIngreso;
            
            case '':
                alert('El campo no puede quedar vacío, debe ingresar SI o NO. Intente nuevamente.');
                ingreso = prompt('¿Desea ingresar a la tienda online y ver la lista de productos? Por favor ingrese SI o NO').toUpperCase();
                break;

            default:
                alert('El dato ingresado es incorrecto, debe ingresar SI o NO. Intente nuevamente.');
                ingreso = prompt('¿Desea ingresar a la tienda online y ver la lista de productos? Por favor ingrese SI o NO').toUpperCase();
                break;
        }
    }
    alert('¡Continúe navegando por nuestra página!');
}
ingreso1();


// Función para ingresar producto y cantidad luego de haber visto la lista de productos
function comprarProductos() {

    let productoDeseado = parseInt(prompt('Ingrese el producto deseado'));

    if(productoDeseado === 1) {
        buscar = productos.find((product) => product.id === 1)
        console.log(buscar)
        productos.forEach((prod) => {
            const newProduct = new Producto(prod.id, prod.name, prod.price);
            productosObjeto.push(newProduct);
        })
    } else if (productoDeseado === 2) {
        buscar = productos.find((product) => product.id === 2)
        console.log(buscar)
        productos.forEach((prod) => {
            const newProduct = new Producto(prod.id, prod.name, prod.price);
            productosObjeto.push(newProduct);
        })
    } else if (productoDeseado === 3) {
        buscar = productos.find((product) => product.id === 3)
        console.log(buscar)
    } else if (productoDeseado === 4) {
        buscar = productos.find((product) => product.id === 4)
        console.log(buscar)
    } else {
        alert('Debe ingresar un ID de producto válido');
        comprarProductos();
    }

    let cantidadDeseada = parseInt(prompt('Ingrese la cantidad deseada del producto'));
    if(isNaN(cantidadDeseada)) {
        alert('Debe ingresar una cantidad válida');
        cantidadDeseada;
    } else {
        alert(`Usted ha seleccionado ${cantidadDeseada} items del producto: ${productoDeseado}.`);
    }

    masProductos1();
}


// Función que pregunta al usuario si desea seleccionar más productos
function masProductos1() {
    let masProductos2 = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase();

    whileMasProductos:
    while(masProductos2 != 'NO') {
        switch(masProductos2) {
            case 'SI':
                comprarProductos();
                break whileMasProductos;
                
            case '':
                alert('El campo no puede quedar vacío, debe ingresar SI o NO. Intente nuevamente.');
                masProductos2 = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase();
                break;
        
            default:
                alert('El dato ingresado es incorrecto, debe ingresar SI o NO. Intente nuevamente.');
                masProductos2 = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase();
                break;
        }
    }
    console.log(productosObjeto)
    alert('¡Gracias por su compra!');
}





