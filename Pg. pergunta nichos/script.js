const options = document.querySelectorAll(".option");
const result = document.getElementById("result");
const btnContinue = document.getElementById("btnContinue");
const btnClear = document.getElementById("btnClear");

let selectedNiche = "";

options.forEach((opt) => {
  opt.addEventListener("click", () => {
    options.forEach((o) => o.classList.remove("selected"));
    opt.classList.add("selected");

    selectedNiche = opt.textContent.trim();
    result.textContent = "Selecionado: " + selectedNiche;
  });
});

btnClear.addEventListener("click", () => {
  options.forEach((o) => o.classList.remove("selected"));
  selectedNiche = "";
  result.textContent = "";
});

btnContinue.addEventListener("click", () => {
  if (!selectedNiche) {
    alert("Por favor, selecione um nicho antes de continuar!");
    return;
  }

  alert("Você escolheu: " + selectedNiche);

  // Salvando no navegador (opcional)
  localStorage.setItem("nicho_empresa", selectedNiche);

  // Se quiser ir para outra página:
  // window.location.href = "proxima-pagina.html";
});
