function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let lista = []
let listaSi = []
let listaNo = []


for(let i=0;i<5;i++){
    lista.push(getRandom(1,300))
}

alert(lista)


for(let b=0;b<lista.length;b++){
    setTimeout(function() {
        let num = parseInt(prompt("inserisci i numeri"));
        while(listaSi.includes(num) || listaNo.includes(num)){
            alert("no")
            num = parseInt(prompt("inserisci i numeri"));
        }
            if(lista.includes(num)){
                listaSi.push(num)
            }else{
                listaNo.push(num)
            }
            document.getElementById("corretto").innerHTML = listaSi.length
            document.getElementById("errore").innerHTML = listaNo.length
        }, 1000);
}

