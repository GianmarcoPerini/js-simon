function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let lista = []


for(let i=0;i<5;i++){
    lista.push(" " + getRandom(1,300))
}

alert(lista)
console.log(lista);

for(let b=0;b<lista.length;b++){
    setTimeout(function() {
        let num = prompt("inserisci i numeri");

        if(lista[b].includes(num) == true){
            console.log("ok");
        }else{
            console.log("no");
        }
    }, 500);
}