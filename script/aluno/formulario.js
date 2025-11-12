document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formAluno',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Documento', dado: 'documento', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/alunos',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/alunos',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/alunos/id=',
        token: localStorage.getItem("tokenAppCorporativa"),
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
