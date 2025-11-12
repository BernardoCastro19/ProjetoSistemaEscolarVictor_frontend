document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formTurma',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'NumeroAlunos', dado: 'numeroAlunos', tipo: 'numero', obrigatorio: true },
            { titulo: 'Disciplina', dado: 'disciplina', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/turmas',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/turmas',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/turmas/id=',
        token: localStorage.getItem("tokenAppCorporativa"),
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
