document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaProfessor',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/professores',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Documento', dado: 'documento' },
            { titulo: 'Diploma', dado: 'diploma' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/professores',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});