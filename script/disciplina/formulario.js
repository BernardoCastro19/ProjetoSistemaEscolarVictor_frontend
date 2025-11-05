document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formDisciplina',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto' },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Horas', dado: 'horas', tipo: 'numero', obrigatorio: true },
        ],
        idObjeto: 'id',
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/disciplinas',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/disciplinas',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/disciplinas/id=',
    };
    await appCorporativa.criarFormulario(
        parametros
    );
});

