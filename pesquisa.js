console.log("JS inicializada");

document.querySelectorAll(".opcao").forEach(function (label) {
  label.addEventListener("click", function () {
    var radioId = label.getAttribute("data-for");
    var parentQuestion = label.closest(".questao");

    // Remove a classe 'is_selected' de todos os divs dentro da mesma questão
    parentQuestion.querySelectorAll(".opcao").forEach(function (siblingDiv) {
      siblingDiv.classList.remove("is_selected");
    });

    // Marca o input correspondente e adiciona a classe 'is_selected' ao label clicado
    document.getElementById(radioId).checked = true;
    label.classList.add("is_selected");
  });
});

const prosseguirSim = document.getElementById("estado_sim");
const prosseguirNao = document.getElementById("estado_nao");
const questaoSeguinte = document.getElementById("cidade");

prosseguirSim.addEventListener("click", function () {
    console.log("Mudou");
  if (prosseguirSim.checked) {
    questaoSeguinte.disabled = false;
  } else {
    questaoSeguinte.disabled = true;
  }
});

prosseguirNao.addEventListener("click", function () {
  if (prosseguirNao.checked) {
    questaoSeguinte.disabled = true;
  } else {
    questaoSeguinte.disabled = false;
  }
});
