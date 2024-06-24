console.log("JS inicializada");


document.addEventListener('DOMContentLoaded', function() { //garante que o js seja executado após html ser carregado
    document.querySelectorAll('.field-input').forEach(function(div) {
        div.addEventListener('click', function() {
            var radioId = div.getAttribute('data-for');
            var parentQuestion = div.closest('.field-question');

            // Remove a classe 'is-selected' de todos os divs dentro da mesma questão
            parentQuestion.querySelectorAll('.field-input').forEach(function(siblingDiv) {
                siblingDiv.classList.remove('is-selected');
            });

            // Marca o input correspondente e adiciona a classe 'is-selected' ao div clicado
            document.getElementById(radioId).checked = true;
            div.classList.add('is-selected');
        });
    });
});