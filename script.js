// Tabela cliente

document.getElementById("cadastrodocliente").addEventListener("submit", function(event) {
    event.preventDefault();
    adicionarcliente();
});

function adicionarcliente(){
    
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    document.getElementById('nome').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";


    pessoas = document.getElementById("listadeclientes");
    var tabela = document.getElementById("listadeclientes");
    var quantidadelinhas = tabela.rows.length;
    var linha = tabela.insertRow(quantidadelinhas);

    var celnome = linha.insertCell(0);
    var celtelefone = linha.insertCell(1);
    var celemail = linha.insertCell(2);
    var celacoes = linha.insertCell(3);

    celnome.innerHTML = nome;
    celtelefone.innerHTML = telefone;
    celemail.innerHTML = email;


// Botão Editar

    var botaoeditar = document.createElement("button");
    botaoeditar.textContent = "Editar";
    botaoeditar.className = "botao-editar";
    botaoeditar.onclick = function(event) {
        var linhaatual = event.target.parentNode.parentNode;
        var celulas = linhaatual.getElementsByTagName('td');
        document.getElementById('nome').value = celulas[0].textContent;
        document.getElementById('telefone').value = celulas[1].textContent;
        document.getElementById('email').value = celulas[2].textContent;
        linhaatual.remove();
    };

    celacoes.appendChild(botaoeditar);


//Botão Excluir

    var botaoexcluir = document.createElement("button");
    botaoexcluir.textContent = "Excluir";
    botaoexcluir.className = "botao-excluir";
    botaoexcluir.onclick = function(event) {
        var elementoexcluir = event.target;
        if(elementoexcluir.classList.contains("botao-excluir")){
            var celula = elementoexcluir.parentNode;
            var exlinha = celula.parentNode;
            exlinha.remove();
        }
    };
    celacoes.appendChild(botaoexcluir);
}


//Filtro

const filtro = document.getElementById('filtro');
const dadosclientes = document.getElementById('dadosclientes');

filtro.addEventListener('keyup', () => {
    let expressao = filtro.value.toLowerCase();

    if(expressao.length < 2 && expressao.length > 0){
        return;
    }
    
    let linhas = dadosclientes.getElementsByTagName('tr')
    for (let posicao in linhas){
        if (true == isNaN(posicao)){
            continue;
        }
        let conteudodalinha = linhas[posicao].innerHTML.toLowerCase();
        if (true == conteudodalinha.includes(expressao)){
            linhas[posicao].style.display = '';
        } else{
            linhas[posicao].style.display = 'none';
        }
    }
});
