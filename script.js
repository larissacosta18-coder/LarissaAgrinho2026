// Lista de plantas disponíveis (pode trocar os emojis pelas suas imagens depois!)
const listaPlantas = {
    soja: '🌿',
    milho: '🌽',
    aveia: '🌾'
};

// Função que limpa o campo e brota as plantas novas
function atualizarCampo() {
    const seletor = document.getElementById('culturas');
    const culturaEscolhida = seletor.value;
    
    // Altera o texto do painel superior para a planta selecionada
    document.getElementById('cultura-titulo').innerText = culturaEscolhida.toUpperCase();

    const campo = document.getElementById('campo-plantas');
    campo.innerHTML = ''; // Arranca as plantas antigas do campo

    // Faz nascer 16 plantinhas novas distribuídas no campo
    for (let i = 0; i < 16; i++) {
        const novaPlanta = document.createElement('div');
        novaPlanta.className = 'planta';
        novaPlanta.innerText = listaPlantas[culturaEscolhida];
        
        // Deixa a brisa com tempos de balanço um pouquinho diferentes para ficar bem natural
        const delayBrisa = (Math.random() * 1.5).toFixed(2);
        novaPlanta.style.animationDelay = `${delayBrisa}s`;

        campo.appendChild(novaPlanta);
    }
}

// Monitora quando a pessoa muda a opção no menu de seleção
document.getElementById('culturas').addEventListener('change', atualizarCampo);

// Assim que entra no site, já roda a função para começar com a Soja bonitinha na tela
window.onload = function() {
    atualizarCampo();
};
