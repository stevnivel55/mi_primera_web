const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensajememe");

const newLocal = "click";
boton.addEventListener(newLocal, () => {
    mensaje.textContent = "¡Has hecho clic en el botón!";
    setTimeout(() => {
        mensaje.textContent = "";
    }, 1500);
});

// 1. Lista de recomendaciones (puedes añadir los juegos o frases que quieras aquí)
const recomendaciones = [
   
];

// 2. Capturamos los elementos del HTML
const cajaSugerencias = document.getElementById("sugerencias");
const inputBuscar = document.getElementById("buscar"); 

// 3. Función para filtrar y mostrar las sugerencias flotantes
function mostrarSugerencias() {
    // Limpiamos la caja para que no se acumulen las búsquedas anteriores
    cajaSugerencias.innerHTML = "";

    // Convertimos lo que escribe el usuario a minúsculas
    const textoUsuario = inputBuscar.value.toLowerCase();

    // Filtramos la lista de recomendaciones según lo que escribe el usuario
    const recomendacionesFiltradas = recomendaciones.filter(texto => 
        texto.toLowerCase().includes(textoUsuario)
    );

    // SI HAY COINCIDENCIAS: Las mostramos en la lista flotante
    if (recomendacionesFiltradas.length > 0) {
        recomendacionesFiltradas.forEach(texto => {
            const li = document.createElement("li");
            li.textContent = texto;

            // Si hace clic en la sugerencia, se escribe en el buscador y se oculta la lista
            li.addEventListener("click", () => {
                inputBuscar.value = texto;
                cajaSugerencias.style.display = "none";
            });

            cajaSugerencias.appendChild(li);
        });
    } else {
        // 🆕 SI NO EXISTE EN LA LISTA: Añadimos el ID y dejamos que el CSS controle el color
        const liError = document.createElement("li");
        liError.id = "liError"; // 👈 Vincula directamente con tu CSS
        liError.textContent = "¿qué vas a buscar en la web de prueba?";
        liError.style.cursor = "default"; 
        cajaSugerencias.appendChild(liError);
    }

    // Hacemos visible la caja flotante
    cajaSugerencias.style.display = "block";
}

// 4. EVENTO: Al pasar el ratón por encima del cuadro de búsqueda se despliega la lista
inputBuscar.addEventListener("mouseenter", mostrarSugerencias);

// Opcional: También se actualiza dinámicamente si el usuario escribe dentro
inputBuscar.addEventListener("input", mostrarSugerencias);

// 5. EVENTO: Esconde las sugerencias cuando el ratón sale de la zona del buscador
const zonaBuscador = document.querySelector(".buscador");
zonaBuscador.addEventListener("mouseleave", () => {
    cajaSugerencias.style.display = "none";
});

// 1. Capturamos el botón de modo oscuro
const botonModo = document.getElementById("botonModo");

// 2. Escuchamos cuando el usuario hace clic en él
botonModo.addEventListener("click", () => {
    // Alternamos la clase "dark-mode" en el body
    document.body.classList.toggle("dark-mode");

    // 3. Opcional: Cambiamos el texto del botón para que quede más pro
    if (document.body.classList.contains("dark-mode")) {
        botonModo.textContent = "🌙";
    } else {
        botonModo.textContent = "☀️";
    }
});