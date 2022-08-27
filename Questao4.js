const divi = document.getElementById("num");
const button = document.getElementById("btn");
const result = document.getElementById ("resultado");
const avis = document.getElementById("aviso");




function mescla(num, adiciona) {
    divi = Number.parseInt(document.getElementById("num").value);
    adiciona = [Luidy, Moura, LuidyMoura];
    

    for(let i = 0; i < adiciona.length; i++){
        if(num% 5 == 0 && num%9 == 0){
            num.push(adiciona[i]);   
        }else if (num % 5 == 0){
            num.push(adiciona[i]);
        }else if (num % 9 == 0){
            num.push(adiciona[i]);
        }
        return num;


    }
}