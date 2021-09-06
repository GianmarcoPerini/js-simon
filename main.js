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
console.log(lista);


for(let b=0;b<lista.length;b++){
    setTimeout(function() {
        let num = parseInt(prompt("inserisci i numeri"));
        while(listaSi.includes(num) || listaNo.includes(num)){
            alert("no")
            num = parseInt(prompt("inserisci i numeri"));
        }
            if(lista.includes(num)){
                listaSi.push(num)
                document.getElementById("corretto").innerHTML += "<button>" + listaSi.slice(-1) + "</button>"
            }else{
                listaNo.push(num)
                document.getElementById("errore").innerHTML += "<button>" + listaNo.slice(-1) + "</button>"
            }
        }, 1000);
}