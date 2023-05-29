/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon', 'renaultclio', 'notaxes', 'sitcom', 'fishnet' ];
var domain = ['.com','.es', '.net', '.io'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
        //   console.log(pronoun[i] + adj[j] + noun[k]+ domain[l]);
            
            // DOMAIN SIN EL PUNTO
            var compDomain = domain[l].substring(1,domain.length);

            // NOUN SOLO CON EL DOMINIO
            var compNoun = noun[k].substring((noun[k].length - (domain[l].length ) + 1), noun[k].length+1);

            if (compDomain == compNoun) {
                console.log(noun[k].substring(0, noun[k].length - domain[l].length +1) + domain[l]);
                
            }
            else{
                console.log(pronoun[i] + adj[j] + noun[k]+ domain[l]);
            }

        }


      }

  }
  
}



// DOMAIN SIN EL PUNTO
var compDomain = domain[2].substring(1,domain.length);

// NOUN SOLO CON EL DOMINIO
var compNoun = noun[5].substring((noun[5].length - (domain[2].length ) + 1), noun[5].length+1);

if (compDomain = compNoun) {
    console.log(noun[5].substring(0, noun[5].length - domain[2].length +1) + domain[2]);
    
}



