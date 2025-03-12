document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao');
    const resultado = document.getElementById('resultado');
    
    botao.addEventListener('click', function() {
        // Gera uma cor aleatória
        const corAleatoria = gerarCorAleatoria();
        
        // Atualiza o texto e o estilo do elemento resultado
        resultado.textContent = `Cor gerada: ${corAleatoria}`;
        resultado.style.backgroundColor = corAleatoria;
        resultado.style.color = corContraste(corAleatoria);
    });
    
    // Função para gerar uma cor hexadecimal aleatória
    function gerarCorAleatoria() {
        const letras = '0123456789ABCDEF';
        let cor = '#';
        for (let i = 0; i < 6; i++) {
            cor += letras[Math.floor(Math.random() * 16)];
        }
        return cor;
    }
    
    // Função para determinar se o texto deve ser preto ou branco com base na cor de fundo
    function corContraste(hexColor) {
        // Remove o # se presente
        hexColor = hexColor.replace('#', '');
        
        // Converte para RGB
        const r = parseInt(hexColor.substr(0, 2), 16);
        const g = parseInt(hexColor.substr(2, 2), 16);
        const b = parseInt(hexColor.substr(4, 2), 16);
        
        // Calcula a luminosidade
        const luminosidade = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Retorna preto para cores claras e branco para cores escuras
        return luminosidade > 0.5 ? '#000000' : '#FFFFFF';
    }
}); 