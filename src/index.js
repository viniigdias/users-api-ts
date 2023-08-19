/*eslint-disable*/
var usuarioArray = [];
var listarUsuario = function () {
    try {
        fetch('https://fakestoreapi.com/users')
            .then(function (resposta) { return resposta.json(); })
            .then(function (ListaDeUsuarios) {
            usuarioArray = ListaDeUsuarios;
            listarUsuarioTela(usuarioArray);
        })
            .catch(function (error) {
            alert("Erro ao buscar usu\u00E1rios: ".concat(error.message));
        });
    }
    catch (error) {
        alert("Erro ao buscar usu\u00E1rios: ".concat(error.message));
    }
};
var listarUsuarioTela = function (listar) {
    var usuarios = document.getElementById("usuarios");
    listar.forEach(function (item) {
        usuarios.insertAdjacentHTML("beforeend", "\n            <li>\n                <div class=\"imagem\">\n                    <img src=\"imagens/246x0w.webp\" alt=\"\">\n                </div>\n                <h4>Nome: ".concat(item.name.firstname, "</h4>\n                <h4>Sobrenome ").concat(item.name.lastname, "</h4>\n                <h4>Email: ").concat(item.email, "</h4>\n                <h4>Telefone:<span class=\"nome-estilizado\"><br> ").concat(item.phone, "</h4>\n                <h4>Endere\u00E7o: ").concat(item.address.city, ", ").concat(item.address.street, ", ").concat(item.address.number, "</h4>\n                <h4>CEP:  ").concat(item.address.zipcode, "</h4>\n                <button><a href=\"https://www.google.com/maps?q=").concat(item.address.geolocation.lat, ",").concat(item.address.geolocation.long, "\">Mostrar localiza\u00E7\u00E3o</a></button>\n            </li>\n        "));
    });
};
listarUsuario();
