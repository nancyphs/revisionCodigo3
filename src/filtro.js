// Tenemos un li de productos
//Corregi ruta de imagenes
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "/public/imagenes/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "/public/imagenes/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "/public/imagenes/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "/public/imagenes/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "/public/imagenes/zapato-rojo.jpg"}
];

const listaDeProductos = document.getElementById("lista-de-productos"); /* Se cambio getElementsByName a getElementById, ya que el elemento en el HTML se identifica con id="lista-de-productos. 
Y se cambio "li" ya que no es elemento que se espera*/

const filtroInput = document.getElementById("filtro-input"); /* Se cambio "querySelector('.input')", usando getElementById("filtro-input"), para atraer el elemento correspondiente. 
Y se cambio $i por filtroInput*/

/**
 * Se agregó la anotación, para documentar adecuadamente el parámetro que recibe. Esto es parte de la documentación JSDoc.
 * 
 * Función para renderizar y mostrar los productos en el contenedor.
 * @param {Array} productosAMostrar - Arreglo de productos que se desean mostrar.
 */


/* Se elimino el for loop duplicado y se sustituyo por la funcion "displayProductos", que utiliza forEach para recorrer el arreglo de productos. 
para centralizar la logica de renderizacion en una unica funcion, evitando repetir codigo */

function displayProductos(productosAMostrar) {
/*
se simplifico

while (li.firstChild) {
  li.removeChild(li.firstChild);
} 

Para limpiar el contenedor para evitar mostrar productos duplicados
 */ 
listaDeProductos.innerHTML = "";
  
  // Se itera sobre cada producto y se crean sus elementos HTML
  productosAMostrar.forEach(producto => {

    // Crear un div para cada producto y asignarle la clase correspondiente
   // Se cambio "var" por "const", tambien se cambio "b" por un nombre mas descriptivo
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    
    // Crear un párrafo para el nombre del producto
    // Se cambio "var" por "const", tambien se cambio "ti" por un nombre mas descriptivo
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;
    
    // Crear la imagen del producto y asignar la ruta correspondiente
    // Se cambio "var" por "const"
    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);
    
    // Agregar el título y la imagen al div del producto
    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);
    
    // Agregar el div del producto al contenedor principal
    listaDeProductos.appendChild(divProducto);
  });
}

// Mostrar todos los productos al cargar la página
displayProductos(productos);

// Seleccionamos el boton que activa el filtrado
const botonDeFiltro = document.querySelector("button");

// Asignamos el evento onclick para ejecutar el filtrado al hacer clic en el boton
botonDeFiltro.onclick = function() {
  // Se obtiene el texto ingresado por el usuario y se convierte a minusculas
  const texto = filtroInput.value.trim().toLowerCase();
  
  // Se filtran los productos comparando el tipo o el color, haciendo la busqueda insensible a mayusculas/minusculas
  const productosFiltrados = productos.filter(item => 
    item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
  );
  
  // Se muestran los productos que cumplen con el filtro
  displayProductos(productosFiltrados);
}