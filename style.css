* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    user-select: none;
}

body {
    overflow: hidden;
    background: #5fa8e9;
}

#cenario {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #5fa8e9;
    overflow: hidden;
}

.ceu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: #5fa8e9;
}

/* Sistema de Curvas e Morros Fluídos (Overlaps de Verde) */
.morro {
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
}

.morro svg {
    width: 100%;
    height: 80px;
}

.morro-atras { top: 40%; z-index: 1; opacity: 0.7; }
.morro-meio { top: 43%; z-index: 2; opacity: 0.9; }
.morro-frente { top: 46%; z-index: 3; }

/* Nuvens Flutuantes */
.nuvens-container {
    position: absolute;
    top: 12%;
    width: 100%;
    height: 80px;
}

.nuvem {
    position: absolute;
    width: 130px;
    height: 45px;
    background: #ffffff;
    border-radius: 50px;
    box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.06);
    animation: moverNuvens linear infinite;
}

.nuvem::before, .nuvem::after {
    content: '';
    position: absolute;
    background: #ffffff;
    border-radius: 50%;
}

.nuvem::before { bottom: 15px; left: 15px; width: 45px; height: 45px; }
.nuvem::after { bottom: 15px; right: 20px; width: 55px; height: 55px; }

.n1 { top: -20px; animation-duration: 40s; opacity: 0.9; left: -150px; }
.n2 { top: 30px; animation-duration: 28s; animation-delay: -5s; transform: scale(0.7); opacity: 0.8; left: -150px; }
.n3 { top: 10px; animation-duration: 48s; animation-delay: -15s; transform: scale(0.85); opacity: 0.75; left: -150px; }

@keyframes moverNuvens {
    0% { transform: translateX(-160px); }
    100% { transform: translateX(110vw); }
}

/* Solo / Grama Principal (Verde mais escuro com pontinhos abaixo das curvas) */
.grama-textura {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48%;
    background-color: #559e1d; 
    background-image: radial-gradient(#3d7512 22%, transparent 22%);
    background-size: 16px 16px; 
    padding: 50px 40px;
    z-index: 4; /* Fica por cima de todas as curvas */
}

/* Interface Gráfica */
.painel-info {
    position: absolute;
    top: 25px;
    left: 25px;
    background: rgba(37, 71, 26, 0.96);
    border: 3px solid #142b0d;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    padding: 22px;
    width: 430px;
    color: #99db62;
    z-index: 10;
    backdrop-filter: blur(4px);
}

.painel-info h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #b0f57a;
    letter-spacing: 1px;
}

.painel-info p {
    font-size: 14px;
    margin: 8px 0;
    font-weight: bold;
}

.painel-info span {
    color: #ffffff;
}

.linha-tracejada, .divisor {
    border-bottom: 2px dashed #3d7512; 
    margin-bottom: 8px;
}

.divisor { margin: 15px 0; }
.cor-mercado { color: #99db62 !important; }

/* Grid de Plantação Otimizado para caber muitas plantas */
.plantacao {
    display: grid;
    grid-template-columns: repeat(11, 1fr); /* 11 colunas para espalhar melhor */
    grid-gap: 18px;
    max-width: 98%;
    margin: 0 auto;
    justify-items: center;
}

/* Balanço Fluído */
.planta {
    font-size: 42px;
    display: inline-block;
    transform-origin: bottom center;
    animation: brisaSuave 3s ease-in-out infinite alternate;
    filter: drop-shadow(3px 4px 2px rgba(0,0,0,0.12));
}

@keyframes brisaSuave {
    0% { transform: rotate(-6deg) skewX(-2deg); }
    100% { transform: rotate(6deg) skewX(2deg) scaleY(1.05); }
}

/* Caixa de Controle */
.seletor-cultura {
    position: absolute;
    bottom: 25px;
    right: 25px;
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 14px;
    padding: 18px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    z-index: 10;
    font-weight: bold;
    color: #000000;
    width: 290px;
}

.seletor-cultura select, .seletor-cultura input {
    font-size: 14px;
    padding: 6px 10px;
    border: 2px solid #000000;
    border-radius: 8px;
    background: #fff;
    font-weight: bold;
    outline: none;
    text-align: center;
}
