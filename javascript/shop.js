
// Condicional para ingreso a la tienda y lista de productos

function ingreso1() {
    let ingreso = prompt('¿Desea ingresar a la tienda online y ver la lista de productos? Por favor ingrese SI o NO').toUpperCase();

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
    alert('¡Continúe navegando por nuestra página!');
}

// Función para ingresar producto y cantidad luego de haber visto la lista de productos

function comprarProductos() {
    let productoDeseado = prompt('Ingrese el producto deseado').toUpperCase();
    let cantidadDeseada = parseInt(prompt('Ingrese la cantidad deseada del producto'));

    // Función que constata que el prompt no quede vacío
    function productoValido() {
        if((productoDeseado == '') || (cantidadDeseada == '')) {
            alert('Debe ingresar un producto y un número válidos');
            comprarProductos();
        } else {
            alert(`Usted ha seleccionado ${cantidadDeseada} items del producto: ${productoDeseado}.`);
        }
    }
    productoValido();

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
    masProductos1();
}

ingreso1();



