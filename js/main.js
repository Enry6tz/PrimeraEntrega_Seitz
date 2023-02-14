let rta=false
let tot=0
let gan=0
const aceite = Number(300)
const vino = Number(150)
const pan = Number(30)
const carne =Number(420)

function suma(prod) {
    switch (prod) {
        case 1: 
        tot += aceite
        gan += aceite*0,05
            break;
        case 2:
        tot+= vino
        gan += vino*0,4 
            break;
        case 3:
        tot+= pan
        gan += pan*0,1
            break;
        case 4:
        tot+= carne
        gan += carne*0,2
            break;
        default:
            return console.log("producto no encontrado");
    }
}


let num =Number(prompt("ingrese cantidad de productos a ingresar"))
while (!isNaN(num) && rta !=false){
    alert("no ingresaste valor numerico. ingrese valor numerico o ESC para salir")
    num =(prompt("ingrese cantidad de productos a ingresar"))
    if (num.ToUpperCase() == "ESC"){rta= false}
    else{num =Number(num)}
}           



if(rta != true){
console.log ("bienvenido usted ingresará: "+ num +" productos")
console.log("ingrese tipo de productos")

for (i=0 ; i<num ; i++){
console.log ("ingrese 1 para aceite; ingrese 2 para vino; ingrese 3 para pan; ingrese 4 para carne")
prod =Number(prompt(i+1  + "° producdto a ingresar:"))
suma(prod)
}
console.log ("el total es "+ tot + ", su ganancia es de: " + gan)
}
alert("muchas gracias, hasta luego! :)")