let nombres = [];
let continuar = true;
let cantidad = 0;


while (continuar) {
    let menu = Number(prompt(`Elija una de las siguientes opciones:
    1 - Cantidad de personas
    2 - Ver Nombres Cargados
    3 - Calcular Valor de tenedor
    4 - Salir`));

    switch (menu) {
        case 1:
            cantidad = Number(prompt("¿Cuántos son?"));
            for (let i = 0; i < cantidad; i++) {
                nombres[i] = prompt("Ingrese un nombre");
            }
            break;
        case 2:
            if (nombres.length === 0) {
                alert("No hay nombres cargados.");
            } else {
                for (let i = 0; i < nombres.length; i++) {
                    alert(nombres[i]);
                }
            }
            break;
        case 3:
            alert ("Cantidad "+cantidad) //Puse esto para validar si cantidad llega con un valor o no.
            if (cantidad >= 0) {
                calculoCubierto(cantidad);
            } else {
                alert("Primero debe ingresar la cantidad de personas en la opción 1.");
            }
            break;
        case 4:
            confirm ("Esta seguro que quiere salir?");
            continuar = false;
            break;
        default:
            alert("Opción no válida. Intente nuevamente.");
            break;
    }
}