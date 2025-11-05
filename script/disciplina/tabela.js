document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaDisciplina',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/disciplinas',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Horas', dado: 'horas' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/disciplinas',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});