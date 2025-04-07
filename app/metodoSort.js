sortByPriceButton = document.getElementById('btnOrdenarPorPreco');
sortByPriceButton.addEventListener('click', ordenarPorPreço);

function ordenarPorPreço() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    apresentaLivrosNaUI(livrosOrdenados);
}