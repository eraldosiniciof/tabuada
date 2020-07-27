function calcular() {
    const textN = document.querySelector("#numero")   
    const res = document.querySelector("#res")

    const numero = Number(textN.value)
    res.innerHTML = ''

    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `<p>${numero} x ${c} = ${numero * c}</p>`
    }
    s
}



