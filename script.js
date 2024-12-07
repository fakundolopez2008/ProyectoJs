let nombres = [];
let continuar = true;
let cantidad;

while (continuar) {
    let menu = Number(prompt(`Elija una de las siguientes opciones:
    1 - Cantidad de personas
    2 - Ver Nombres Cargados
    3 - Calcular valor de tenedor
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
            const precioCubierto = 2800;
            let total = precioCubierto * cantidad;
            alert("El precio total es de: $"+total);
            break;
        case 4:
            continuar = false;
            break;
        default:
            alert("Opción no válida. Intente nuevamente.");
            break;
    }
}