function raiz(){

let a = parseFloat(document.getElementById("valora").value);
let b = parseFloat(document.getElementById("valorb").value);
let c = parseFloat(document.getElementById("valorc").value);
 resposta = document.getElementById("resultado");
let fdelta = (b*b) - 4*a*c;

if (fdelta < 0){
    resposta.innerHTML = "O valor de Delta é negativo!";
}else{
    if(fdelta > 0){
        let raiz1 = (-b + Math.sqrt(fdelta))/(2*a);
        let raiz2 = (-b - Math.sqrt(fdelta))/(2*a);

        resposta.innerHTML = "Raiz 1:  "  +  raiz1  +  "Raiz 2: " + raiz2;

    }else{
        if (fdelta == 0){

            raiz = (-b + Math.sqrt(fdelta))/(2*a);

            resposta.innerHTML = "Raiz dupla: " + raiz;
        }else{

            real = (-b)/(2*a);
            img1 = Math.sqrt(-fdelta)/(2*a);
            img2 = - Math.sqrt(-fdelta)/(2*a);

            resposta.innerHTML = "Raiz 1: " + real + "+" + img1 + "i" + "Raiz 2: " + real + "+ " + img2 + "i"; 


        }
    }
}


}


