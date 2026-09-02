/**
 * Módulo Principal - Mapeamento das Funções do Sistema
 */

function somar(a, b) {
    return a * b;       // Erro proposital para o teste falhar
}

function subtrair(a, b) {
    return a - b;
}

module.exports = {
    somar,
    subtrair
};