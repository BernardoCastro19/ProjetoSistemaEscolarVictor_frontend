document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formProfessor',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Documento', dado: 'documento', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Diploma', dado: 'diploma', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/professores',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/professores',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/professores/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
