// Banco de dados com as informações de cada planta e suas cotações por hectare
const dadosPlantas = {
    soja: {
        emoji: '🌿',
        cotacaoBRL: 6.00, // Exemplo: R$ 6,00 por hectare/alqueire fictício para o jogo
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

// Função que limpa o campo, atualiza os dados financeiros e brota as plantas novas
function atualizarCampo() {
    const seletor = document.getElementById('culturas');
    const culturaEscolhida = seletor.value;
    
    // Pega a quantidade de hectares digitada (se estiver vazio ou zero, considera 1)
    const inputHectares = document.getElementById('input-hectares');
    let hectares = parseFloat(inputHectares.value);
    if (isNaN(hectares) || hectares <= 0) {
        hectares = 0;
    }

    // Busca os dados específicos da planta selecionada
    const dados = dadosPlantas[culturaEscolhida];

    // 1. Atualiza o painel superior/esquerdo com os dados dinâmicos
    document.getElementById('cultura-titulo').innerText = culturaEscolhida.toUpperCase();
    
    // Atualiza a cotação do dia de acordo com a planta
    document.getElementById('cotacao-valor').innerText = `R$ ${dados.cotacaoBRL.toFixed(2)} / US$ ${dados.cotacaoUSD.toFixed(2)}`;
    
    // Atualiza a exibição de hectares e alqueires (1 hectare = 2 alqueires no seu exemplo original)
    const alqueires = hectares * 2;
    document.getElementById('txt-hectares').innerText = `${hectares} ha (${alqueires} alqueires)`;

    // Calcula o saldo baseado nos hectares (Cotação x Hectares)
    const saldoBRL = hectares * dados.cotacaoBRL;
    const saldoUSD = hectares * dados.cotacaoUSD;
    
    // Atualiza o saldo na tela em ambas as moedas
    document.getElementById('saldo-valor').innerText = `R$ ${saldoBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / US$ ${saldoUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // 2. Faz as plantas brotarem no campo
    const campo = document.getElementById('campo-plantas');
    campo.innerHTML = ''; // Arranca as plantas antigas

    // Faz nascer 16 plantinhas novas distribuídas no campo
    for (let i = 0; i < 16; i++) {
        const novaPlanta = document.createElement('div');
        novaPlanta.className = 'planta';
        novaPlanta.innerText = dados.emoji;
        
        // Deixa a brisa com tempos de balanço diferentes
        const delayBrisa = (Math.random() * 1.5).toFixed(2);
        novaPlanta.style.animationDelay = `${delayBrisa}s`;

        campo.appendChild(novaPlanta);
    }
}

// Monitora as mudanças nos controles da tela
document.getElementById('culturas').addEventListener('change', atualizarCampo);
document.getElementById('input-hectares').addEventListener('input', atualizarCampo);

// Inicializa o sistema assim que a página carrega
window.onload = function() {
    atualizarCampo();
};
