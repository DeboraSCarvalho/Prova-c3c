let a, b, c, resultado;

function triangulo() {

a = parseFloat(document.meutriangulo.ladoa.value);
b = parseFloat(document.meutriangulo.ladob.value);
c = parseFloat(document.meutriangulo.ladoc.value);

if (a<b+c && b<a+c && c<a+b) {

if (a==b && b==c) {

resultado='Equilatero';}

else {

if (a==b || a==c || c==b) {

resultado='Isoceles';}

else {

resultado='Escaleno';}

}
}
document.meutriangulo.saida.value = resultado;
}
