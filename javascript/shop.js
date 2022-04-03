
// Variable de ingreso a la tienda y lista de productos

let ingreso = prompt('¿Desea ingresar a la tienda online y ver la lista de productos? Por favor ingrese SI o NO').toUpperCase()

// Función para ingresar producto y cantidad luego de haber visto la lista de productos

function comprarProductos() {
    let productoDeseado = prompt('Ingrese el producto deseado')
    let cantidadDeseada = parseInt(prompt('Ingrese la cantidad deseada del producto'))

    alert(`Usted ha seleccionado ${cantidadDeseada} items del producto: ${productoDeseado}.`)

    let masProductos = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase()

    while(masProductos != 'NO') {
        switch(masProductos) {
            case 'SI':
                comprarProductos();
                break;
            
            case '':
                alert('El campo no puede quedar vacío, debe ingresar SI o NO. Intente nuevamente.');
                masProductos = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase();
                break;
    
            default:
                alert('El dato ingresado es incorrecto, debe ingresar SI o NO. Intente nuevamente.');
                masProductos = prompt('¿Desea seleccionar más productos? Por favor ingrese SI o NO').toUpperCase();
                break;
        }
    }
    alert('¡Gracias por su compra!')
}

// Condicional para ingreso a la tienda y lista de productos

while(ingreso != 'NO') {
    switch(ingreso) {
        case 'SI':
            alert('Esta es nuestra lista de productos: A) Llave cruz - B) Refrigerante - C) Destornillador');
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
alert('¡Continúe navegando por nuestra página!')

