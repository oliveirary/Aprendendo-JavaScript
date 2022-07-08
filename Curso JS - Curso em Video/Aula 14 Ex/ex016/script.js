function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('resposta')

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            res.innerHTML = 'Impossivel contar!'
            //window.alert('[ERRO!] - Faltam dados!')
        } else {
            res.innerHTML = 'Contando: <br>'
            var n1 = Number(inicio.value)
            var n2 = Number(fim.value)
            var s = Number(passo.value)
            if (s <= 0) {
                window.alert('Passo inválido! Considerando passo = 1')
                s = 1
            }
            if ( n1 < n2 ) {
                //Contagem Progressiva
                for(var c = n1; c <= n2; c+=s) {
                    res.innerHTML += `${c} \u{1F449}`
                } 
            }else {
                //Contagem Regressiva
                for(var c = n1; c >= n2; c -= s) {
                    res.innerHTML += `${c} \u{1F449}` 
                }
            }
            res.innerHTML += `\u{1f3c1}`
            }
        }
