const botaoAjuda = document.getElementById("btn-ajuda");
const opcoesAjuda = document.getElementById("opcoes-ajuda");

const botaoDoacao = document.getElementById("btn-doacao");
const formularioDoacao = document.getElementById("form-doacao");

botaoAjuda.addEventListener("click", function () {
  opcoesAjuda.classList.toggle("oculto");

  if (opcoesAjuda.classList.contains("oculto")) {
    botaoAjuda.textContent = "Mostrar opções";
    formularioDoacao.classList.add("oculto");
    botaoDoacao.textContent = "Fazer doação";
  } else {
    botaoAjuda.textContent = "Ocultar opções";
  }
});

botaoDoacao.addEventListener("click", function () {
  formularioDoacao.classList.toggle("oculto");

  if (formularioDoacao.classList.contains("oculto")) {
    botaoDoacao.textContent = "Fazer doação";
  } else {
    botaoDoacao.textContent = "Fechar formulário";
  }
});