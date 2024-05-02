function clicar() {
    var s = document.getElementById("sim")
    s.innerText = "NÃO , EU NEM GOSTO DE VOCÊ ! SAI DAQUI MULEQUE ! "    
    s.style.backgroundColor = "green"

    setTimeout(function() {
        location.reload();
    }, 2000)
    
}

function clicou() {
    var c = document.getElementById("nao")
    c.innerText = "VAI A MERDA , VAI !"    
    c.style.backgroundColor = "green"

    setTimeout(function() {
        location.reload();
    }, 2000)
}

