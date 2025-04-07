const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const botao = document.getElementById(this.id);
    const categoria = botao.value;

    let livrosFiltrados = categoria == 'disponivel' ? 
        livros.filter(livro => livro.quantidade > 0) :
        livros.filter(livro => livro.categoria == categoria);
    
    apresentaLivrosNaUI(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotalDisponiveis = calculaValorTotalLivros(livrosFiltrados);
        totalLivrosDisponiveisSection.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">R$ ${valorTotalDisponiveis.toFixed(2)}</span></p>
        </div>
        `
    }
}