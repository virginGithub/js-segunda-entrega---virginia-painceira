//USUARIO REGISTRADO PARA ACCEDER AL LISTADO DE PRODUCTOS REDIRECCIONARIA A ZONA EXCLUSIVA (la idea es dispararlo desde un botón- Agregue dos botones abajo para otras funciones pero no estan aplicadas, esta mal? )

let pass = 1234;
let intentos = 3;
let ingreso = false;

alert("Bienvenidos a Colchon in a Box zona PRODUCTOS ");

for (let i = 1; i <= intentos; i++) {
    let dato = parseInt(prompt("Ingrese su clave para acceder al listado (Intento " + i + " de " + intentos + ")"));
    if (dato === pass) {
        alert("Bienvenido ");
        ingreso = true;
        break;
    } else {
        alert("Clave incorrecta. Le quedan " + (intentos - i) + " intentos.");
    }
}

if (ingreso) {
    mostrarPrecio();
} else {
    alert("Se han agotado los intentos. No se pudo acceder a su cuenta.");
}

function mostrarPrecio() {
    let codigoProducto = prompt("Ingrese el código del producto elegido:\n1. (Single), \n2.(Queen), \n3. (King) \n4. Salir de la tienda ");
    switch (codigoProducto) {
        case "1":
            alert("Colchón Single Precio: $25.000");
            mostrarPrecio();    
            break;
        case "2":
            alert("Colchón Queen Precio: $45.000");
            mostrarPrecio();
            break;
        case "3":
            alert("Colchón King Precio: $65.000");
            mostrarPrecio();
            break;
            case"4":
            salida();
            break;
        default:
            alert("Ese modelo no existe, consúltenos en el formulario de contacto");
            break;
    }
}function salida(){
    let ingreso = true;
    while (ingreso) {
        let opcion = prompt("¿Desea salir de la tienda?\n1. Si\n2. No");
        switch(opcion){
            case "1":
                ingreso = false;
                alert("¡Gracias! ¡Vuelva pronto!");
                break;
            case "2":
                mostrarPrecio();
                break;
            default:
                alert("Opción invalida. Por favor, elija nuevamente.");
                break;
        }
    }
    return ingreso;
}

for (let i = 1; i <= intentos; i++) {
    let dato = parseInt(prompt("Ingrese su clave para acceder al listado (Intento " + i + " de " + intentos + ")"));
    if (dato === pass) {
        alert("Bienvenido ");
        ingreso = true;
        break;
    } else {
        alert("Clave incorrecta. Le quedan " + (intentos - i) + " intentos.");
    }
}

if (ingreso) {
    mostrarPrecio();
} else {
    alert("Se han agotado los intentos. No se pudo acceder a su cuenta.");
}


//PREFERI UTILIZAR NUMEROS EN LUGAR DE LOS NOMBRES DE PRODUCTOS REVIENDO UNA CLASE, MAS COMODO PARA EL USUARIO Y UTILICE ALGUNAS FUNCIONES 
function mostrarPrecio() {
    let codigoProducto = prompt("Ingrese el código del producto elegido:\n1. (Single), \n2.(Queen), \n3. (King) \n4. Salir de la tienda ");
    switch (codigoProducto) {
        case "1":
            alert("Colchón Single Precio: $25.000");
            break;
        case "2":
            alert("Colchón Queen Precio: $45.000");
            break;
        case "3":
            alert("Colchón King Precio: $65.000");
            break;
            case"4":
            salida();
            break;
        default:
            alert("Ese modelo no existe, consúltenos en el formulario de contacto");
            break;
    }
}function salida(){
    let ingreso = true;
    while (ingreso) {
        let opcion = prompt("¿Desea salir de la tienda?\n1. Si\n2. No");
        switch(opcion){
            case "1":
                ingreso = false;
                alert("¡Gracias! ¡Vuelva pronto!");
                break;
            case "2":
                mostrarPrecio();
                break;
            default:
                alert("Opción invalida. Por favor, elija nuevamente.");
                break;
        }
    }
    return ingreso;
}

// ANTES DE DEFINIR BIEN MI PROYECTO AGREGUE  OBJETOS, ARRAYS Y FUNCIONES ABSTRACTAS Y DE ORDEN SUPERIOR PARA SEGUIR CORRIGIENDO , SE QUE HAY ERRORES
const productos = [
    { id: 1, nombre: "Colchón Single", precio: 25000 },
    { id: 2, nombre: "Colchón Queen", precio: 45000 },
    { id: 3, nombre: "Colchón King", precio: 65000 },
    { id: 4, nombre: "Almohada simple", precio: 5000 },
    { id: 5, nombre: "Acolchado Single", precio: 15000 },
    { id: 6, nombre: "Acolchado Queen", precio: 18000 },
    { id: 7, nombre: "Acolchado King", precio: 20000 },
    { id: 8, nombre: "Almohadón grande", precio: 7500 },
  ];
  
  productos.forEach((producto)=>{
  console.log(producto);
  console.log(producto.nombre);
  }) 
  
  const carrito = [];
  
  //find
  const encontrado = productos.find((el) => {
    return el.nombre === "Almohadón";
  });
  
  const barato = productos.find((el) => {
    return el.precio < 10000;
  });
  
  console.log(barato); 
  let Presupuesto= parseInt(prompt("Ingresa un limite de precio"))
  
  //uso de filter
  const baratos = productos.filter((el) => el.presupuesto <= ingreso);
  console.log(baratos); 
  
  //uso de some
  const existe= productos.some(el=>{
    return el.nombre == "Colchón"
  })
  
  
  
  //uso de map
  
  const nombreProductos= productos.map(el=>{
    return el.nombre
  })

  
  const actualizarPrecio= productos.map(el=>{
  return {
    id:el.id,
    nombre:el.nombre,
    precio: el.precio *1.10
  }
  })
  console.log(productos);
  console.log(actualizarPrecio);



 
