// Seleciona TODOS os elementos que têm a classe ".info-icon"
// (ou seja, todos os ícones de informação ⓘ)
const icons = document.querySelectorAll(".info-icon");


// Percorre cada ícone encontrado
icons.forEach(icon => {

  // Pega o valor do atributo data-tooltip do HTML
  // Ex: data-tooltip="tooltip1"
  // Isso vira: "tooltip1"
  const tooltip = document.getElementById(icon.dataset.tooltip);

  // Se não existir um tooltip com esse ID, ignora esse ícone
  // (evita erros caso o HTML esteja mal configurado)
  if (!tooltip) return;

  // Variável para controlar o tempo de delay
  let timeout;


  //  Quando o mouse entra no ícone
  icon.addEventListener("mouseenter", () => {

    // Cria um pequeno atraso (200ms) antes de mostrar o tooltip
    // Isso evita que ele fique piscando rápido
    timeout = setTimeout(() => {
      tooltip.style.display = "block"; // mostra o tooltip
    }, 200);

  });


  //  Quando o mouse sai do ícone
  icon.addEventListener("mouseleave", () => {

    // Cancela o delay caso ainda não tenha terminado
    clearTimeout(timeout);

    // Esconde o tooltip imediatamente
    tooltip.style.display = "none";

  });


  // Enquanto o mouse se move dentro do ícone
  icon.addEventListener("mousemove", (e) => {

    // e.pageX → posição horizontal do mouse
    // e.pageY → posição vertical do mouse
    // +10 serve para não ficar grudado no cursor
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.style.left = e.pageX + 10 + "px";

  });

});