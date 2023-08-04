import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
const importaDados = document.querySelector("#botao-importa");
if (importaDados) {
    importaDados.addEventListener("click", () => {
        controller.importaDados();
    });
}
else {
    throw Error("Não foi possivel localizar os dados.");
}
//# sourceMappingURL=app.js.map