const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const botao = document.getElementById(this.id);
    let livrosFiltrados = livros.filter(livro => livro.categoria == botao.value);
    apresentaLivrosNaUI(livrosFiltrados);
}