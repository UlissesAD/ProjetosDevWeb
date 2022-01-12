
var resultado, num1 = '', num2 = '', operador, aux = 3;

function num(val) {
    switch (aux) {
        //Completando o primeiro número
        case 0:
            aviso(0);
            document.getElementById("display").textContent += (val);
            num1 += val;
            break;
        //Salvando o segundo numero
        case 1:
            aviso(0);
            document.getElementById("display").textContent += (val);
            num2 += val;
            break;
        //Iniciando nova operação sem o resto
        default:
            operador = num1 = num2 = "";
            aviso(0);
            document.getElementById("display").textContent = (val);
            num1 += val;
            aux = 0;
            break;

    }

}

function op(val) {
    switch (aux) {
        //verificando se o usuário ja digitou um numero
        case 0:
            if (num1 != '-' && num1 != '+') {
                aviso(0);
                console.log("nt");
                document.getElementById("display").textContent += (" " + val + " ");
                operador = val;
                num1 = parseInt(num1);

                aux = 1;
            } else {
                aviso(1);
            }

            break;
        //verificando se o segundo numero pode ter um sinal novo
        case 1:
            if (num2 == "" && val == "-") {
                aviso(0);
                document.getElementById("display").textContent += (val);
                num2 += val;
            } else {
                aviso(1);
            }
            break;
        //Iniciando nova operação com um sinal para o numero 1
        default:
            if (val == "-" && num1 == "") {
                operador = num1 = num2 = "";
                aviso(0);
                document.getElementById("display").textContent = (val);
                num1 += val;
                aux = 0;
            } else {
                if (num1 != "") {
                    aux = 0;
                    op(val);
                }
            }
            break;
    }
}

function equals() {

    if (num1 != null && num2 != '') {
        aviso(0);
        num2 = parseInt(num2);

        switch (operador) {
            case '+':
                num1 = num1 + num2;
                break;
            case '-':
                num1 = num1 - num2;
                break;
            case '*':
                num1 = num1 * num2;
                break;
            case '/':
                num1 = num1 / num2;
                break;
            default:
                break;
        }

        document.getElementById("display").textContent = (num1);
        operador = num2 = "";
        aux = 2;
    } else {
        aviso(3);
    }
}

function aviso(i) {

    switch (i) {
        case 0:
            document.getElementById("warning").innerHTML = '\n';
            break;
        case 1:
            document.getElementById("warning").textContent = ("DIGITE UM NÚMERO");
            break;
        case 2:
            document.getElementById("warning").textContent = ("UMA OPERAÇÃO JÁ FOI ESCOLHIDA");
            break;
        case 3:
            document.getElementById("warning").textContent = ("OPERAÇÃO INCOMPLETA");
            break;
    }
}

var clear = document.getElementById('display');
clear.onclick = function cl() {
    document.getElementById('display').textContent = "";
    num1 = num2 = "";
    aux = 2;
}

