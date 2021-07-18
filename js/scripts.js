const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //aqui ele faz a página não atualizar quando clicamos em cadastrar
    let email = document.getElementById('email').value;
    let data = {
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

     let cadastrando = `<p>Cadastrando E-mail...</p>`;

    let cadastrado = `<p>E-mail Cadastrado com sucesso !</p>`;

    content.innerHTML = cadastrando;

    setTimeout(() => {
        content.innerHTML = cadastrado
    }, 1500)

})