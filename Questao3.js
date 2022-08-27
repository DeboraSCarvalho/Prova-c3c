const nota1 = document.getElementById("nota");
const button = document.getElementById("btn");
const result = document.getElementById ("resultado");
const avis = document.getElementById("aviso");

button.onclick = ()=>{
    if(nota1 < 40){
        result.innerHTML = "Aluno reprovado";

    }else{
        result.innerHTML = "Aluno aprovado";
    }
    if(nota1.value > 100 || nota1.value <0){
        avis.innerText = "Somente valores ente 0 e 100";
    }else{
        avis.innerText = "";
    }
}

function arredondar(nota1) {
    nota1 = Number.parseInt(document.getElementById("nota").value);
    if (nota1 < 38) {
        return nota1
    } else if (nota1 % 5 >= 3 ) {
        return nota1 = nota1 + (5 - (nota1 % 5))
    } else {
        return nota1 = nota1 - (nota1 % 5)
    }
}




    
 