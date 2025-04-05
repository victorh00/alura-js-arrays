let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();
const livrosSection = document.getElementById("livros");

async function getBuscarLivrosDaApi() {
    try {
        const response = await fetch(endpointDaApi);
        if (!response.ok) {
            throw new Error('Erro ao buscar os livros.');
        }
        livros = await response.json();
        console.table(livros);
        // livros.forEach(livro => {
        //     console.log(livro.titulo);
        // });
        apresentaLivrosNaUI(livros);
    } catch(error) {
        console.error(error.message);
    }
}

function apresentaLivrosNaUI(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        livrosSection.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    });
}

