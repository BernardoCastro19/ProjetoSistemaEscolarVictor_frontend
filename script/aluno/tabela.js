document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaAluno',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/alunos',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Documento', dado: 'documento' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/alunos',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});