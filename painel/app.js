function carregarDados() {

    fetch('dados.json')
        .then(response => response.json())
        .then(dados => {

            document.getElementById('saldo').textContent =
                dados.saldo.toFixed(2);

            document.getElementById('meta').textContent =
                dados.meta.toFixed(2);

        })
        .catch(erro => {
            console.error('Erro ao carregar JSON:', erro);
        });
}


function alterarSaldo() {

    const novoSaldo =
        document.getElementById('novoSaldo').value;

    fetch('api/atualizar.php', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            saldo: Number(novoSaldo)
        })
    })
    .then(response => response.json())
    .then(resultado => {

        console.log(resultado);

        if (resultado.sucesso) {

            document.getElementById('saldo').textContent =
                Number(resultado.saldo).toFixed(2);

        }

    })
    .catch(erro => {
        console.error('Erro:', erro);
    });
}


carregarDados();