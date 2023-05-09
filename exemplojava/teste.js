//alert("Oioioioioioi")

/*
var nome = prompt("Digite seu nome:")
console.log(nome)
document.write(nome)
*/

//VARIAVEIS
/*
let a = 10
console.log(a)

if(true){
    let a = 15
    console.log(a)
}
console.log(a)
*/

/*
var nome = prompt("Digite seu nome:")
//alert("Bom dia " + nome)
//TEMPLATE STRING => INTERPOLAÇÃO
alert(`Bom dia ${nome}`)
*/

var n1 = parseInt(prompt("Digite o N1: "))
var n2 = parseInt(prompt("Digite o N2: "))
console.log("N1 é: " + typeof n1)
console.log("N2 é: " + typeof n2)

var soma = n1 + n2
console.log("Soma é: " + typeof soma)

if (soma>10){
    document.write(`<p class="maior">A soma de ${n1} com ${n2} é ${soma}</p>`)
}
else{
    document.write(`<p class="menor">A soma de ${n1} com ${n2} é ${soma}</p>`)
}



