//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const resultadoEL = document.getElementById('result')
const compEL = document.getElementById('comp')
const upperEL = document.getElementById('upper')
const lowerEL = document.getElementById('lower')
const numsEL = document.getElementById('nums')
const simbEL = document.getElementById('simb')
const generateEL = document.getElementById('generate')
const boardEL = document.getElementById('board')

const randomFuncion = { //OBJETO randomFunction que vai ter chaves lower, upper, number e symbol, cada chave tem o valor da função respectiva
    lower: getRandomMinusc,
    upper: getRandomMaiusc,
    number: getRandomNum,
    symbol: getRandomSimb
}

generateEL.addEventListener('click', () => {
    const comprimento = +compEL.value // + para converter para tipo number
    //console.log(comprimento)//CONSOLE LOG DO COMPRIMENTO DA PASS
    const temLower = lowerEL.checked    
    const temUpper = upperEL.checked
    const temNums = numsEL.checked
    const temSimb = simbEL.checked  //devolve true se simbEl estiver checked
    //console.log(temLower,temUpper,temNums,temSimb)
    resultadoEL.innerText = gerarPassword (temLower,temUpper,temNums,temSimb, comprimento)//FUNÇÃO gerarPass vai receber parametros temLower,temUpper,temNums,temSimb e comprimento
})



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


function gerarPassword (lower,upper,number,symbol, comp) {
    let pass = ''
    const tiposCont = lower + upper + number + symbol 
    //console.log(tiposCont) 
    const tiposArr = [{lower}, {upper}, {number}, {symbol}].filter( item => Object.values(item)[0])//FILTRO PARA RETIRAR DO ARRAY TUDO O Q FOR FALSE
    //console.log(tiposArr)

    if(tiposCont === 0){
        return ''
    }

    for (let i=0; i < comp ; i += tiposCont){
        tiposArr.forEach(tipo => {
            //console.log(tipo)
            const funcName = Object.keys(tipo)[0]
            console.log(funcName)//vai devolver low upp num sim comp
            pass += randomFuncion[funcName]()
        })
    }
    const passFinal = pass.slice (0, comp)
    return passFinal
}

console.log(getRandomMinusc(),getRandomMaiusc(),getRandomNum(),getRandomSimb())
