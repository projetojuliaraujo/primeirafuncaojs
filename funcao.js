function soma(a,b){
    return a+b
}

function subtr(a,b){
    return a-b
}
function div(a,b){
    return a/b
}
function multi(a,b){
    return a*b
}

function decisao(resp, pri, seg){
    if(resp == 1){
        resultado = soma(pri, seg)
        document.write("<p>A Soma é " + resultado)
    }
    if(resp == 2){
        resultado = soma(pri, seg)
        document.write("<p>A Subtração é " + resultado)

    }
    if(resp == 3){
        resultado = soma(pri, seg)
        document.write("<p>A Multiplicação é " + resultado)

    }
    if(resp == 4){
        resultado = soma(pri, seg)
        document.write("<p>A Divisão é " + resultado)

    }    

    
}