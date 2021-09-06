let lista = []
let listaSi = []
let listaNo = []

for(let i=0;i<5;i++){
    lista.push(getRandom(1,300))
}

alert(lista)
console.log(lista);

setTimeout(function() {
    for(let b=0;b<lista.length;b++){
        let num = parseInt(prompt("Inserisci numeri"));
        while(listaSi.includes(num) || listaNo.includes(num)){
            alert("Numero già inserito")
            num = parseInt(prompt("Inserisci un numero diverso"));
        }
            if(lista.includes(num)){
                listaSi.push(num)
                document.getElementById("corretto").innerHTML += "<button>" + listaSi.slice(-1) + "</button>"
            }else{
                listaNo.push(num)
                document.getElementById("errore").innerHTML += "<button>" + listaNo.slice(-1) + "</button>"
            }
    }
}, 1000);




function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}