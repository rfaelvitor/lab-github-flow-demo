/**
 * Testes Unitários de Exemplo para Integração Contínua (CI)
 */

const { somar, subtrair } = require('./main');

function testSomar() {
    console.log("Executando teste: somar(2, 3)");
    if (somar(2, 3) !== 5) {
        throw new Error("Erro no teste de soma");
    }
    console.log("✅ Teste de soma passou!");
}

function testSubtrair() {
    console.log("Executando teste: subtrair(5, 2)");
    if (subtrair(5, 2) !== 3) {
        throw new Error("Erro no teste de subtração");
    }
    console.log("✅ Teste de subtração passou!");
}

try {
    testSomar();
    testSubtrair();
    console.log("🎉 Todos os testes passaram!");
} catch (error) {
    console.error("❌ Falha nos testes:", error.message);
    process.exit(1);
}