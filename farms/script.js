// Seleciona todos os ícones de informação (ⓘ)
const icons = document.querySelectorAll(".info-icon");

icons.forEach(icon => {

  // Pega o ID do tooltip a partir do data-tooltip
  const tooltip = document.getElementById(icon.dataset.tooltip);

  // Se não existir tooltip, ignora este ícone
  if (!tooltip) return;

  // Quando o mouse entra no ícone
  icon.addEventListener("mouseenter", () => {
    tooltip.style.display = "block";
  });

  // Quando o mouse sai
  icon.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  // Faz o tooltip seguir o mouse
  icon.addEventListener("mousemove", (e) => {
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.style.left = e.pageX + 10 + "px";
  });

});

// Adicionado Delay
let timeout;

icon.addEventListener("mouseenter", () => {
  timeout = setTimeout(() => {
    tooltip.style.display = "block";
  }, 200);
});

icon.addEventListener("mouseleave", () => {
  clearTimeout(timeout);
  tooltip.style.display = "none";
});