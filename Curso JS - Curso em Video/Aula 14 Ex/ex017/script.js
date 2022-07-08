function gerar(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let n = Number(num.value)
    if(n == ''){
        res.innerHTML = '[ERRO] Digite um número'     
    }else {
        res.innerHTML = ''
        for(var mult = 0; mult <= 10; mult++){
            res.innerHTML += `${n} X ${mult} = ${n*mult}<br>`
        }
    }
    
}
