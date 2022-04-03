const prompt = require('prompt-sync')();
// Variáveis de controle;
let custoDaViagem = 1000;
let diaSemana = 0;
let hora = 5;
let ganho = 0;
let escolha = '';

// Objetos
const personagem = {
    sonho: 'FAZER UMA VIAGEM PRA DISNEY',
    dinheiroDisponivel: 500,
    montante: function (salario) {
        this.dinheiroDisponivel += salario;
    },
};

// Vetores
const diasDaSemana = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
];
const periodo = ['manhã', 'tarde', 'noite'];

//       Funções de controle de tempo
function controleTempo(horas) {
    hora += horas;
}

/****************************************************************************************** */

console.log(
    '   Bem vindo ao jogo viagem dos sonhos. Esse jogo se passa em torno de um jovem que deseja fazer sua viagem dos sonhos mas não dispoe de todos os recursos no momento e para isso precisa que vc o ajude nessa sua jornada.'.toUpperCase(),
);
console.log();
console.log();
externo: while (true) {
    let iniciar = prompt(
        'Se deseja iniciar o jogo digite "SIM" para iniciar ou "NAO" para finalizar. >> '.toUpperCase(),
    ).toUpperCase();
    console.log();
    console.log();
    if (iniciar == 'SIM') {
        console.log('Primeiro vamos dar nome ao seu personagem.'.toUpperCase());
        console.log();
        personagem.nome = prompt(
            'Como se chamará o seu personagem? '.toUpperCase(),
        ).toUpperCase();
        console.log();
        personagem.sonho = 'Fazer uma viagem pra disney'.toUpperCase();
        console.clear();
        console.log(
            `\nNosso personagem agora ja ganhou um nome e ja percebeu que vai ter que ganha mais dinheiro para poder fazer sua viagem, visto que seus recursos nao são suficiente e as dispesas da viagem lhe custará um total de ${custoDaViagem} dinheiros.\n\nVamos começar? Lembrando que o ${personagem.nome} só tem ${diasDaSemana.length} dias pra conseguir o dinheiro.`.toUpperCase(),
        );
        console.log();
        if (personagem.dinheiroDisponivel < custoDaViagem) {
            for (let i = 0; i < diasDaSemana.length; i++) {
                hora = 5;
                ganho = 0;
                console.log();
                console.log(diasDaSemana[i].toUpperCase());
                console.log();
                console.log(
                    `Hoje é ${diasDaSemana[i]} e ${personagem.nome} precisa tomar uma descisão sobre o que ele vai fazer hoje.`.toUpperCase(),
                );
                if (diasDaSemana[i] == diasDaSemana[0]) {
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - vai dormir.
            2 - vai sair com os amigos.
            3 - vai fazer trabalho remunerado e conseguir dinheiro pra viagem.`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        console.log();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `Vc passou a ${periodo[ii]} dormindo e nao correu atras dos seus objetivo, desse modo vc nunca vai conseguir nada.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir o dinheiro e amanhã já tem conta pra pagar.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    if (hora > 18) {
                        console.log('***************************');
                        console.log(
                            `BOA NOITE ${
                                personagem.nome
                            }, DESCANSE POIS AMANHÃ É ${
                                diasDaSemana[i + 1]
                            } E O DIA SERÁ LONGO, SE VC NÃO TRABALHOU TRABALHE OU ENTAO VC NÃO FARÁ A VIAGEM. SE TIVER TRABALHADO, CONTINUI ASSIM.`.toUpperCase(),
                        );
                        console.log();
                        console.log(
                            `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                        );
                        console.log();
                        console.log(
                            `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                        );
                        console.log();
                        console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                        console.log('****************************');
                    }
                }
                if (diasDaSemana[i] == diasDaSemana[1]) {
                    ganho = -70;
                    personagem.montante(ganho);
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - NADA.
            2 - pas redes sociais
            3 - conseguir dinheiro`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `Lembrando que hoje tem aluguel pra pagar`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir o dinheiro pra viajar e hoje ja tem aluguel pra pagar.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    console.log('***************************');
                    if (hora > 18) {
                        console.log(
                            `BOA NOITE ${
                                personagem.nome
                            }, DESCANSE POIS AMANHÃ É ${
                                diasDaSemana[i + 1]
                            } E O DIA SERÁ LONGO, SE VC NÃO TRABALHOU TRABALHE OU ENTAO VC NÃO FARÁ A VIAGEM. SE TIVER TRABALHADO, CONTINUI ASSIM.`.toUpperCase(),
                        );
                        console.log();
                        console.log(
                            `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                        );
                        console.log();
                        console.log(
                            `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                        );
                        console.log();
                        console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                        console.log('****************************');
                    }
                }
                if (diasDaSemana[i] == diasDaSemana[2]) {
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - pra casa do meus pais.
            2 - nada.
            3 - Trabalhar conseguir dinheiro pra viagem.`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `Visitar os pais é  bom mas o melhor seria vc deixar pro fim de semana .`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir o dinheiro e amanhã já tem conta pra pagar.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    if (hora > 18) {
                        console.log('***************************');
                        console.log(
                            `BOA NOITE ${
                                personagem.nome
                            }, DESCANSE POIS AMANHÃ É ${
                                diasDaSemana[i + 1]
                            } E O DIA SERÁ LONGO, SE VC NÃO TRABALHOU TRABALHE OU ENTAO VC NÃO FARÁ A VIAGEM. SE TIVER TRABALHADO, CONTINUI ASSIM.`.toUpperCase(),
                        );
                        console.log();
                        console.log(
                            `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                        );
                        console.log();
                        console.log(
                            `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                        );
                        console.log();
                        console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                        console.log('****************************');
                    }
                }
                if (diasDaSemana[i] == diasDaSemana[3]) {
                    ganho = -70;
                    personagem.montante(ganho);
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - vai dormir.
            2 - vai sair com os amigos.
            3 - vai fazer trabalho remunerado e conseguir dinheiro pra viagem.`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `Vc passou a ${periodo[ii]} dormindo e nao correu atras dos seus objetivo, desse modo vc nunca vai conseguir nada.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir o dinheiro.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    if (hora > 18) {
                        console.log('***************************');
                        console.log(
                            `BOA NOITE ${
                                personagem.nome
                            }, DESCANSE POIS AMANHÃ É ${
                                diasDaSemana[i + 1]
                            } E O DIA SERÁ LONGO, SE VC NÃO TRABALHOU TRABALHE OU ENTAO VC NÃO FARÁ A VIAGEM. SE TIVER TRABALHADO, CONTINUI ASSIM.`.toUpperCase(),
                        );
                        console.log();
                        console.log(
                            `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                        );
                        console.log();
                        console.log(
                            `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                        );
                        console.log();
                        console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                        console.log('****************************');
                    }
                }
                if (diasDaSemana[i] == diasDaSemana[4]) {
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - nada.
            2 - vai sair com os amigos.
            3 - vai fazer trabalho remunerado e conseguir dinheiro pra viagem.`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `desse modo vc nunca vai conseguir nada.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    if (hora > 18) {
                        console.log('***************************');
                        console.log(
                            `BOA NOITE ${
                                personagem.nome
                            }, DESCANSE POIS AMANHÃ É ${
                                diasDaSemana[i + 1]
                            } E O DIA SERÁ LONGO, SE VC NÃO TRABALHOU TRABALHE OU ENTAO VC NÃO FARÁ A VIAGEM. SE TIVER TRABALHADO, CONTINUI ASSIM.`.toUpperCase(),
                        );
                        console.log();
                        console.log(
                            `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                        );
                        console.log();
                        console.log(
                            `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                        );
                        console.log();
                        console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                        console.log('****************************');
                    }
                }
                if (diasDaSemana[i] == diasDaSemana[5]) {
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - vai dormir.
            2 - vai sair com os amigos.
            3 - vai fazer trabalho remunerado e conseguir dinheiro pra viagem.`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `Vc passou a ${periodo[ii]} dormindo e nao correu atras dos seus objetivo, desse modo vc nunca vai conseguir nada.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir o dinheiro.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    if (hora > 18) {
                        console.log('***************************');
                        console.log(
                            `BOA NOITE ${
                                personagem.nome
                            }, DESCANSE POIS AMANHÃ É ${
                                diasDaSemana[i + 1]
                            } E O DIA SERÁ LONGO, SE VC NÃO TRABALHOU TRABALHE OU ENTAO VC NÃO FARÁ A VIAGEM. SE TIVER TRABALHADO, CONTINUI ASSIM.`.toUpperCase(),
                        );
                        console.log();
                        console.log(
                            `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                        );
                        console.log();
                        console.log(
                            `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                        );
                        console.log();
                        console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                        console.log('****************************');
                    }
                }
                if (diasDaSemana[i] == diasDaSemana[6]) {
                    for (let ii = 0; ii < 3; ii++) {
                        console.log(
                            `
                    ${periodo[ii].toUpperCase()}\n\n
            1 - acessar as redes sociais.
            2 - vai sair com os amigos.
            3 - vai fazer trabalho remunerado e conseguir dinheiro pra viagem.`.toUpperCase(),
                        );
                        console.log();
                        escolha = +prompt('QUAL ALTERNATIVA VC ESCOLHE? >>> ');
                        console.log();
                        console.log();
                        while (escolha != 1 && escolha != 2 && escolha != 3) {
                            console.log();
                            console.log('ESCOLHA ERRADA');
                            let = escolha2 = +prompt(
                                'ESCOLHA UMA ALTERNATIVA CORRETA. >>> ',
                            );
                            escolha = escolha2;
                            console.log();
                        }
                        console.clear();
                        switch (escolha) {
                            case 1:
                                controleTempo(6);
                                console.log(
                                    `Vc passou a ${periodo[ii]} nas redes sociais e nao correu atras dos seus objetivo, desse modo vc nunca vai conseguir nada.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 2:
                                controleTempo(6);
                                console.log(
                                    `Assim vc não vai conseguir.`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                            case 3:
                                controleTempo(6);
                                ganho = 73;
                                personagem.montante(ganho);
                                console.log(
                                    `BOA ESCOLHA ${personagem.nome}, assim vc somou ${ganho} dinheiro ao seu montante pra viagem`.toUpperCase(),
                                );
                                console.log();
                                console.log(
                                    `HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`,
                                );
                                console.log();
                                console.log(
                                    `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                                );
                                console.log();
                                break;
                        }
                    }
                    console.log('***************************');
                    if (personagem.dinheiroDisponivel >= custoDaViagem) {
                        console.log('             VC CONSEGUIO');
                        console.log(
                            'VC CONSEGUIO O DINHEIRO PRA SUA TÃO SONHADA VIAGEM. DESFRUTE O MÁXIMO DELA E SEJA MUITO FELIZ',
                        );
                    } else if (personagem.dinheiroDisponivel < custoDaViagem) {
                        console.log('             GAME OVER');
                        console.log(
                            'VC NÃO CONSEGUIO O DINHEIRO PRA FAZER A VIAGEM MAS NA PROXIMA VEZ SE ESFORCE MAIS',
                        );
                    }
                    console.log();
                    console.log(`HORÁRIO: ${hora} horas da ${diasDaSemana[0]}`);
                    console.log();
                    console.log(
                        `MONTANTE PRA VIAGEM: ${personagem.dinheiroDisponivel} DINHEIRO.`,
                    );
                    console.log();
                    console.log(`QUANTIDADE DE DIAS: ${i + 1}`);
                    console.log('****************************');
                }
            }
        }

        break externo;
    } else if (iniciar == 'NAO') {
        console.log('JOGO ENCERRADO');
        break externo;
    }
}