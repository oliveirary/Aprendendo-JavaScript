let valores = [2,5,8,4,6]
console.log(valores)
/*
for(let pos =0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]} `)
}