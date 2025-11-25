let parrafo = document.createElement ("p");
let namePr = document.getElementById("name").value;
let addressCl = document.getElementById("address").value;

function procesarPago(producto) {
    return new Promise((resolver, rechazar) => {
        setTimeout(function(){
            if (namePr != '') {
                resolver('Pago procesado correctamente para ' + namePr);
            } else {
                rechazar('No se puede procesar el pago sin producto');
            }
        },1500);
    });
}

function enviarPedido() {
    return new Promise((resolver, rechazar) => {
        if (addressCl === '') {
            rechazar('Dirección de envío no válida');
        } else {
            setTimeout(function(){
                let error = Math.random();
                if (error <= 0.2) {
                    rechazar('Error durante el envío, intente de nuevo.')
                } else {
                    resolver('Pedido enviado correctamente a ' + addressCl);
                }
        },2000);
        }
    });
}

function hacerCompra() {
    procesarPago()
        .then((respuesta) => {
        parrafo.textContent = respuesta;
        document.body.appendChild(parrafo);
        return enviarPedido();
        })
        .then((respuesta) => {
            parrafo.textContent = respuesta;
        })
        .catch((error) =>{
            parrafo.textContent = error;
        });
}
hacerCompra();