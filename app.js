document.addEventListener("DOMContentLoaded", () => {
  console.log("EduToys: Aplicación lista y divertida 🎈");

  // 1. Mensaje de bienvenida dinámico según la hora del día
  const hora = new Date().getHours();
  let saludo = "¡Bienvenido a EduToys! 🧸";

  if (hora >= 6 && hora < 12) {
    saludo = "¡Buenos días! Que hoy sea un gran día de juego y aprendizaje ☀️";
  } else if (hora >= 12 && hora < 19) {
    saludo = "¡Buenas tardes! Momento perfecto para crear y divertirse 🎨";
  } else {
    saludo = "¡Buenas noches! Gracias por visitar EduToys 🌙";
  }

  const contenedorSaludo = document.getElementById("mensaje-bienvenida");
  if (contenedorSaludo) {
    contenedorSaludo.textContent = saludo;
  }

  // 2. Interacción divertida en los botones del catálogo de productos
  const botonesInfo = document.querySelectorAll(".btn-info-producto");
  botonesInfo.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombre = boton.getAttribute("data-nombre");
      alert(`🎈 ¡Excelente elección!\n\nEl producto "${nombre}" está en alta demanda pedagógica.\nPronto podrás agregarlo a tu carrito de compras.`);
    });
  });

  // 3. Manejo interactivo del formulario de contacto
  const formularioContacto = document.getElementById("formulario-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");

  if (formularioContacto && mensajeExito) {
    formularioContacto.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();

      // Mostrar confirmación visual en pantalla
      mensajeExito.style.display = "block";
      mensajeExito.textContent = `🎉 ¡Gracias, ${nombre}! Hemos recibido tu mensaje con éxito. Te responderemos a la brevedad.`;

      // Limpiar campos del formulario
      formularioContacto.reset();

      // Ocultar mensaje automáticamente después de 6 segundos
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 6000);
    });
  }
});