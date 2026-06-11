// Função que simula os dados coletados pelos sensores do silo
function atualizarSensores() {
    // 1. Simulação do Sensor de Quilos (Peso)
    const peso = Math.floor(Math.random() * (48000 - 15000 + 1)) + 15000;
    document.getElementById("txt-peso").innerText = peso.toLocaleString('pt-BR');

    // 2. Simulação do Sensor de Umidade
    const umidade = parseFloat((Math.random() * (17 - 10) + 10).toFixed(1));
    document.getElementById("txt-umidade").innerText = umidade;
    
    const badgeUmidade = document.getElementById("status-umidade");
    if (umidade > 14) {
        badgeUmidade.innerText = "Risco de Fungo (Alta)"; // Mantém o alerta sem o emoji
        badgeUmidade.className = "status-badge status-critico";
    } else if (umidade < 11) {
        badgeUmidade.innerText = "Grao Seco (Perda de Peso)"; // Mantém o alerta sem o emoji
        badgeUmidade.className = "status-badge status-alerta";
    } else {
        badgeUmidade.innerText = "Umidade Ideal"; // Mantém o alerta sem o emoji
        badgeUmidade.className = "status-badge status-ok";
    }

    // 3. Simulação do Sensor de Temperatura
    const temperatura = Math.floor(Math.random() * (42 - 18 + 1)) + 18;
    document.getElementById("txt-temp").innerText = temperatura;

    const badgeTemp = document.getElementById("status-temp");
    if (temperatura >= 35) {
        badgeTemp.innerText = "Superaquecimento!"; // Mantém o alerta sem o emoji
        badgeTemp.className = "status-badge status-critico";
    } else if (temperatura >= 28) {
        badgeTemp.innerText = "Ligar Exaustores"; // Mantém o alerta sem o emoji
        badgeTemp.className = "status-badge status-alerta";
    } else {
        badgeTemp.innerText = "Temperatura Segura"; // Mantém o alerta sem o emoji
        badgeTemp.className = "status-badge status-ok";
    }
}

// Executa uma leitura automatica assim que a pagina abre
window.onload = atualizarSensores;
