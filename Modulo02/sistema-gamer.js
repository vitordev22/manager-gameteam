const prompt = require("prompt-sync")();

let continuar = true;
let time = [];

function mostrarMenu() {
    console.log("-------------------------------------");
    console.log("1 - Cadastrar");
    console.log("2 - Remover");
    console.log("3 - Mostrar equipe");
    console.log("4 - Calcular média");
    console.log("5 - Buscar jogador")
    console.log("6 - Atualizar pontuação")
    console.log("7 - Sair");
    console.log(" ");
    console.log("-------------------------------------");
}

function cadastrarJogador() {
    console.log("");
    let nomeJogador = prompt("Informe o nome do jogador: ");
    let funcaoJogador = prompt("Informe a posição do jogador: ");
    let pontuacaoJogador = Number(prompt("Informe a pontuação do jogador: "));
    
    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida! ");
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador
        }

        time.push(recruta);
        console.log(" ")
        console.log("Usuário " + nomeJogador + " cadastrado com sucesso! ");
        console.log("-------------------------------------");
    }

        
}

function removerJogador() {
        console.log("");
        if (time.length === 0) {
            console.log("Nenhum jogador cadastrado.")
            return;
        }

        let nomeRemover = prompt("Informe o nome que deseja remover: ");
        let indexDeletado = -1;

        for (let i = 0; i<time.length; i++) {
            if (time[i].nome === nomeRemover) {
                indexDeletado = i;
                break;
            }
        }

        if (indexDeletado === -1) {
            console.log("Jogador não encontrado. ");
            return; 
        }

        time.splice(indexDeletado, 1);
        console.log("Jogador deletado com sucesso! ");
        console.log("-------------------------------------");
}

function calcularMedia() {
    console.log("");
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.")
        return;
    }

    let totalPontos = 0;
    for (let i=0; i<time.length; i++) {
        totalPontos += time[i].pontuacao
    }

    let mediaPontos = totalPontos / time.length;

    console.log("------------------------------");
    console.log("O time possui uma média de " + mediaPontos + " pontos");
    console.log("------------------------------");
}

function mostrarEquipe() {
    console.log("");
    if (time.length === 0) {
        return;
    }

    console.log("----------------------------------------------------------------------------");
    for (let i =0; i<time.length; i++) {
        let jogador = time[i];
        console.log((i+1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
    console.log("----------------------------------------------------------------------------");

}

function buscarJogador() {
    console.log("");

    let usuarioProcurado = prompt("Informe o nome do jogador que deseja buscar: ");
    console.log("Buscando por: " + usuarioProcurado + "...")
    console.log("------------------------------");

    let achou = false;

    for (let  i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];
        if (jogadorAtual.nome === usuarioProcurado) {
            console.log("Jogador encontrado!");
            console.log("Nome: " + jogadorAtual.nome + "| Pontos: " + jogadorAtual.pontuacao + "| Função: " + jogadorAtual.funcao);
            achou = true;
            break;
        }
        
    }

    if (achou === false) {
            console.log("O jogador " + usuarioProcurado + " não foi encontrado! ");
        }
    
}

function atualizarPontuacao() {
    console.log(" ");
    let jogadorEscolhido = prompt("Informe o nome do jogador que deseja atualizar a pontuação: ");
    let achou = false;

    for (let  i = 0; i < time.length; i++) {
        if (time[i].nome === jogadorEscolhido) {
            newPontuacao = Number(prompt("Quantos pontos ele ganhou? "));
            time[i].pontuacao += newPontuacao;
            achou = true;
            console.log("Sucesso! A pontuação de " + time[i].nome + " subiu para " + time[i].pontuacao + " pontos.");
            break;
            
        }
        
    }

    if (achou === false) {
            console.log("O jogador " + usuarioProcurado + " não foi encontrado! ");
        }
}

function sair() {
    continuar = false;
}

while (continuar) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1") { 
        cadastrarJogador();
    } else if (opcao === "2") {
        removerJogador();
    } else if (opcao === "3") {
        mostrarEquipe();
    } else if (opcao === "4") {
        calcularMedia();
    } else if (opcao === "5") {
        buscarJogador();
    } else if (opcao === "6") {
        atualizarPontuacao();
    } else if (opcao === "7") {
        sair();
    } else {
        console.log("Selecione uma opção válida!");
    }

}