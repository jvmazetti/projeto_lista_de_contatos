const form = document.getElementById('form-contato');
const imgWhats = '<a href="https://api.whatsapp.com/send?phone=5518999999999"><img src="./imagens/whatsapp-logo.png" alt="logo whats"/></a>';
const nome = [];
const numero = [];
let linhas='';
form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    let linha ='<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${imgWhats}</td>`;
    linha += '</tr>';
    linhas += linha;
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
