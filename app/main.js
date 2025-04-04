let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    console.table(livros);

    livros.forEach(livro => {
        console.log(livro.titulo);
    });
}