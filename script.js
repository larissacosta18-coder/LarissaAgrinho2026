const dadosPlantas = {
    soja: {
        nome: 'SOJA',
        emoji: '🌿',
        cotacaoBRL: 135.00, 
        cotacaoUSD: 27.00,
        cotacaoEUR: 24.50,
        produtividadeMedia: 60 
    },
    milho: {
        nome: 'MILHO',
        emoji: '🌽',
        cotacaoBRL: 60.00,
        cotacaoUSD: 12.00,
        cotacaoEUR: 10.90,
        produtividadeMedia: 135 
    },
    aveia: {
        nome: 'AVEIA',
        emoji: '🌾',
        cotacaoBRL: 45.00,
        cotacaoUSD: 9.00,
        cotacaoEUR: 8.10,
        produtividadeMedia: 70 
    }
};

function atualizarCampo() {
    const seletor = document.getElementById('culturas');
    const culturaEscolhida = seletor.value;
    
    const inputHectares = document.getElementById('input-hectares');
    let hectares = parseFloat(inputHectares.value);
    
    if (isNaN(hectares) || hectares < 0) {
        hectares = 0;
    }

    const dados = dadosPlantas[culturaEscolhida];

    // Atualiza cabeçalho e cotação do topo
    document.getElementById('cultura-titulo').innerText = dados.nome;
    document.getElementById('cotacao-valor').innerText = `R$ ${dados.cotacaoBRL.toFixed(2)} | US$ ${dados.cotacaoUSD.toFixed(2)} | € ${dados.cotacaoEUR.toFixed(2)}`;

    // Realiza o cálculo financeiro direto
    const totalSacas = hectares * dados.produtividadeMedia;
    const saldoBRL = totalSacas * dados.cotacaoBRL;
    const saldoUSD = totalSacas * dados.cotacaoUSD;
    const saldoEUR = totalSacas * dados.cotacaoEUR;
    
    // Mostra o resultado faturado sem textos extras redundantes
    document.getElementById('saldo-valor').innerHTML = 
        `R$ ${saldoBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<br>` +
        `US$ ${saldoUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<br>` +
        `€ ${saldoEUR.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // EXCLUSIVO: Altera a parte de baixo para mostrar SOMENTE a planta escolhida
    document.getElementById('txt-mercado-dinamico').innerText = 
        `${dados.nome}: R$ ${dados.cotacaoBRL.toFixed(2)} | US$ ${dados.cotacaoUSD.toFixed(2)} | € ${dados.cotacaoEUR.toFixed(2)}`;

    // Sistema visual de renderização das plantas no chão
    const campo = document.getElementById('campo-plantas');
    campo.innerHTML = ''; 

    for (let i = 0; i < 32; i++) {
        const novaPlanta = document.createElement('div');
        novaPlanta.className = 'planta';
        novaPlanta.innerText = dados.emoji;
        
        const delayBrisa = (Math.random() * 2.5).toFixed(2);
        const duracaoBrisa = (2.0 + Math.random() * 1.2).toFixed(2);
        novaPlanta.style.animationDelay = `${delayBrisa}s`;
        novaPlanta.style.animationDuration = `${duracaoBrisa}s`;

        campo.appendChild(novaPlanta);
    }
}

document.getElementById('culturas').addEventListener('change', atualizarCampo);
document.getElementById('input-hectares').addEventListener('input', atualizarCampo);

window.onload = function() {
    atualizarCampo();
};
