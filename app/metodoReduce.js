function calculaValorTotalLivros(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0);
}