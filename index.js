"use strict";

const artikels = tikartikels();

let filterwoord = prompt("woord");
let result = []
result = artikels.filter( artikel => artikel.artikelnaam.includes(filterwoord) );

result.forEach(artikel=> {console.log(artikel.artikelnaam)});

let minprijs = prompt("min prijs");
let maxprijs = prompt("max prijs");
let verkoop = [];


if(minprijs<maxprijs){
 verkoop = result.filter(artikel => artikel.verkoopprijs  >= minprijs && artikel.verkoopprijs <= maxprijs);
 let som = 0;
 verkoop.forEach(artikel=>{
    som += artikel.verkoopprijs;
 })

    console.log(verkoop);
    console.log(som / verkoop.length);
}
else{
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



