document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaTurma',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/turmas',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'NumeroAlunos', dado: 'numeroAlunos'},
            { titulo: 'Disciplina', dado: 'disciplina'},
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/turmas',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});