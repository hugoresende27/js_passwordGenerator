//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const randomFuncion = { //OBJETO randomFunction que vai ter chaves lower, upper, number e symbol, cada chave tem o valor da função respectiva
    lower: getRandomMinusc,
    upper: getRandomMaiusc,
    number: getRandomNum,
    symbol: getRandomSimb
}


///////////////////////////////////////////////////////////////////////////////////////
function getRandomMinusc(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +97)// random * 26 + 97 = a, tabela ASCII, vai gerar uma letra minuscula random
}

function getRandomMaiusc(){
    return String.fromCharCode(Math.floor(Math.random() * 26) +65)// random * 26 letras + 65 = A
}
function getRandomNum(){
    return String.fromCharCode(Math.floor(Math.random() * 10) +48)// random * 10 numeros 48 = 0
}
function getRandomSimb(){
    const simbolos = '!@#$%&*/[]{}.,'   /*SIMBOLOS SÃO UMA STRING */
    return simbolos[Math.floor(Math.random() * simbolos.length)]    //STRING[RANDOM VEZES O COMPRIMENTO DA STRING] VAI ESCOLHER UM INDEX
}

console.log(getRandomMinusc(),getRandomMaiusc(),getRandomNum(),getRandomSimb())
