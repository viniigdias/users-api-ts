/*eslint-disable*/
let usuarioArray = []

const listarUsuario = () => {
    try {
        fetch('https://fakestoreapi.com/users')
            .then(resposta => resposta.json())
            .then(ListaDeUsuarios => {
                usuarioArray = ListaDeUsuarios;
                listarUsuarioTela(usuarioArray);
            })
            .catch(error => {
                alert(`Erro ao buscar usuários: ${error.message}`);
            });
    } catch (error) {
        alert(`Erro ao buscar usuários: ${error.message}`);
    }
}

const listarUsuarioTela = (listar) => {
    const usuarios = document.getElementById("usuarios");
    listar.forEach(item => {
        usuarios.insertAdjacentHTML("beforeend", `
            <li>
                <div class="imagem">
                    <img src="imagens/246x0w.webp" alt="">
                </div>
                <h4>Nome: ${item.name.firstname}</h4>
                <h4>Sobrenome ${item.name.lastname}</h4>
                <h4>Email: ${item.email}</h4>
                <h4>Telefone:<span class="nome-estilizado"><br> ${item.phone}</h4>
                <h4>Endereço: ${item.address.city}, ${item.address.street}, ${item.address.number}</h4>
                <h4>CEP:  ${item.address.zipcode}</h4>
                <button><a href="https://www.google.com/maps?q=${item.address.geolocation.lat},${item.address.geolocation.long}">Mostrar localização</a></button>
            </li>
        `);
    });
}

listarUsuario();



