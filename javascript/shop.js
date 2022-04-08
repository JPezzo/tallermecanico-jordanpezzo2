    
// Listado de productos
class Producto {
    constructor(name, price) {
        this.name = name.toUpperCase()
        this.price = parseFloat(price)
        this.sold = false
    }

    addIVA() {
        this.price = this.price * 1.21
    }
}

// Carrito de compras
const CARRITO = []

// Función para ingreso a la tienda y lista de productos

function ingreso1() {
    let ingreso = prompt('¿Desea ingresar a la tienda online y ver la lista de productos? Por favor ingrese SI o NO').toUpperCase();

    while(ingreso != 'NO') {
        switch(ingreso) {
            case 'SI':
                alert('Este es nuestro listado de productos: 1) Llave cruz - $1.500.-; 2) Refrigerante - $850.-; 3) Destornillador - $500; 4) Bidón de aceite Elaion - $2.500.-')
                comprarProductos();
                break;
            
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
    let productoDeseado = prompt('Ingrese el producto deseado').toUpperCase();
    let cantidadDeseada = parseInt(prompt('Ingrese la cantidad deseada del producto'));

    // Condicional que constata que los prompt no queden vacíos
    if((productoDeseado == '') || (isNaN(cantidadDeseada))) {
        alert('Debe ingresar un producto y un número válidos');
        comprarProductos();
    } else {
        alert(`Usted ha seleccionado ${cantidadDeseada} items del producto: ${productoDeseado}.`);
    }

    masProductos1();
}

// Función que pregunta al usuario si desea seleccionar más productos
function masProductos1() {
    let masProductos2 = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase();

    while(masProductos2 != 'NO') {
        switch(masProductos2) {
            case 'SI':
                comprarProductos();
                break;
                
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
    alert('¡Gracias por su compra!');
}





