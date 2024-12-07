let nombres = [];
let continuar = true;

while (continuar) {
    let menu = Number(prompt(`Elija una de las siguientes opciones:
1 - Cantidad de personas
2 - Ver Nombres Cargados
3 - Calcular valor de tenedor
4 - Salir`));

    switch (menu) {
        case 1:
            let cantidad = Number(prompt("¿Cuántos son?"));
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
            
            alert("Funcionalidad en construcción.");
            break;

        case 4:
            continuar = false;
            alert("¡Gracias por usar el programa!");
            break;

        default:
            alert("Opción no válida. Intente nuevamente.");
            break;
    }
}