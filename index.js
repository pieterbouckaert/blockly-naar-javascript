"use strict";

console.log([2, 5, 8, 11].reduce((som, getal) => som + getal));
console.log([5, 8, 2, 11].reduce(
    (kleinste, getal)=> {if (kleinste < getal) return kleinste; return getal;}));

const artikels = tikartikels();

let filterwoord = prompt("woord");
let result = []
result = artikels.filter( artikel => artikel.artikelnaam.includes(filterwoord) );

let minprijs = prompt("min prijs");
let maxprijs = prompt("max prijs");
let verkoop = [];


if(minprijs<maxprijs){
 verkoop = result.filter(artikel => artikel.verkoopprijs  >= minprijs && artikel.verkoopprijs <= maxprijs);
 let  gemiddelde= 0
 verkoop.forEach(artikel=>{
    gemiddelde += artikel.verkoopprijs / verkoop.length
 })
console.log(verkoop);
console.log(gemiddelde);

function berekenGemiddelde(landen) {
    return landen.map(land => land.oppervlakte)
    .reduce((totaal, oppervlakte) => totaal + oppervlakte) / landen.length;
    }


}else{
    console.log("foute ingave min prijs is hoger dan max prijs");
};

function tikartikels(){
const artikels = [];
let artikelnaam = prompt("artikel");
while (artikelnaam !== "stop") {
    artikels.push ({ artikelnaam: artikelnaam , aankooprijs: Number( prompt ("aankoopprijs" )) , verkoopprijs: Number(prompt("verkoopprijs"))});
    artikelnaam = prompt("artikel");   
}
return artikels
};



