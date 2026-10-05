document.addEventListener("DOMContentLoaded", () => {
  console.log("EduToys: Aplicación lista y divertida 🎈");

  // 1. Mensaje de bienvenida dinámico con emojis
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

  // 2. Interacción divertida en los botones de productos
  const botonesInfo = document.querySelectorAll(".btn-info-producto");
  botonesInfo.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombre = boton.getAttribute("data-nombre");
      alert(`🎈 ¡Excelente elección!\n\nEl producto "${nombre}" está en alta demanda pedagógica.\nPronto podrás agregarlo a tu carrito de compras.`);
    });
  });
});