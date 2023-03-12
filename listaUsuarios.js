const loadusuarios = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/usuarios", false);
    xhttp.send();

    const usuarios = JSON.parse(xhttp.responseText);

    for (let usuario of usuarios) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${usuario.nome}</h5>
                        <div>CPF: ${usuario.cpf}</div>                   
                        <div>Data de nascimento: ${usuario.data_nascimento}</div>

                        <hr>

                    </div>
                </div>
            </div>
        `

        document.getElementById('usuarios').innerHTML = document.getElementById('usuarios').innerHTML + x;
    }
}

loadusuarios();