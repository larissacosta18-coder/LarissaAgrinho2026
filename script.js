// Banco de dados do jogo
const dadosPlantas = {
    soja: {
        emoji: '🌿',
        cotacaoBRL: 6.00, 
        cotacaoUSD: 1.20
    },
    milho: {
        emoji: '🌽',
        cotacaoBRL: 52.00,
        cotacaoUSD: 10.40
    },
    aveia: {
        emoji: '🌾',
        cotacaoBRL: 5.20,
        cotacaoUSD: 1.04
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

    // 1. Atualiza textos e cotações na tela
    document.getElementById('cultura-titulo').innerText = culturaEscolhida.toUpperCase();
    document.getElementById('cotacao-valor').innerText = `R$ ${dados.cotacaoBRL.toFixed(2)} / US$ ${dados.cotacaoUSD.toFixed(2)}`;
    
    const alqueires = hectares * 2;
    document.getElementById('txt-hectares').innerText = `${hectares} ha (${alqueires} alqueires)`;

    // Calcula o Saldo Dinâmico automaticamente baseado nos Hectares inseridos
    const saldoBRL = hectares * dados.cotacaoBRL;
    const saldoUSD = hectares * dados.cotacaoUSD;
    
    document.getElementById('saldo-valor').innerText = 
        `R$ ${saldoBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / ` +
        `US$ ${saldoUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // 2. Cria as plantinhas e adiciona o efeito do vento
    const campo = document.getElementById('campo-plantas');
    campo.innerHTML = ''; 

    for (let i = 0; i < 16; i++) {
        const novaPlanta = document.createElement('div');
        novaPlanta.className = 'planta';
        novaPlanta.innerText = dados.emoji;
        
        // Deixa o balanço de cada planta assíncrono para parecer vento de verdade
        const delayBrisa = (Math.random() * 2).toFixed(2);
        const duracaoBrisa = (2 + Math.random() * 1.5).toFixed(2);
        novaPlanta.style.animationDelay = `${delayBrisa}s`;
        novaPlanta.style.animationDuration = `${duracaoBrisa}s`;

        campo.appendChild(novaPlanta);
    }
}

// Fica de olho nas mudanças dos inputs para atualizar os valores na hora
document.getElementById('culturas').addEventListener('change', atualizarCampo);
document.getElementById('input-hectares').addEventListener('input', atualizarCampo);

// Inicia rodando a função assim que a página abre
window.onload = function() {
    atualizarCampo();
};
