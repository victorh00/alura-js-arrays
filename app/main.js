let livros = [];
let desconto = true;
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    try {
        const response = await fetch(endpointDaApi);
        if (!response.ok) {
            throw new Error('Erro ao buscar os livros.');
        }
        livros = await response.json();
        if (desconto) {
            let livrosComDesconto = aplicarDesconto(livros)
            apresentaLivrosNaUI(livrosComDesconto);
        } else {
            apresentaLivrosNaUI(livros);
        }
        // console.table(livros);
        // livros.forEach(livro => {
        //     console.log(livro.titulo);
        // });
    } catch(error) {
        console.error(error.message);
    }
}

