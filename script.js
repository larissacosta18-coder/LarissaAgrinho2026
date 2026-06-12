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

    document.getElementById('cultura-titulo').innerText = culturaEscolhida.toUpperCase();
    document.getElementById('cotacao-valor').innerText = `R$ ${dados.cotacaoBRL.toFixed(2)} / US$ ${dados.cotacaoUSD.toFixed(2)}`;
    
    const alqueires = hectares * 2;
    document.getElementById('txt-hectares').innerText = `${hectares} ha (${alqueires} alqueires)`;

    const saldoBRL = hectares * dados.cotacaoBRL;
    const saldoUSD = hectares * dados.cotacaoUSD;
    
    document.getElementById('saldo-valor').innerText = 
        `R$ ${saldoBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / ` +
        `US$ ${saldoUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const campo = document.getElementById('campo-plantas');
    campo.innerHTML = ''; 

    // Define 36 plantas perfeitamente alinhadas nos blocos 3D do terreno
    for (let i = 0; i < 36; i++) {
        const novaPlanta = document.createElement('div');
        novaPlanta.className = 'planta';
        novaPlanta.innerText = dados.emoji;
        
        // Aplica atrasos diferentes na animação para simular o vento passando pelo campo tridimensional
        const delayBrisa = (Math.random() * 2.5).toFixed(2);
        const duracaoBrisa = (2.2 + Math.random() * 1.0).toFixed(2);
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
