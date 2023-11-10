/* Oppgave 1 (se script.js i javascript basics repoet for hint):

    Lag et array med 10 elementer
    Fjern siste element med .pop
    Legg så til et nytt element i enden i arrayet med .push
    BONUS: Finn og utfør en god method for å ta ut element 3 og 7 fra arrayet tilslutt
    console.log arrayet */

    /* OPPGAVE 1 - Javascript */

let cameraProdusent = ["Canon", "Nikon", "Sony", "Panasonic", "Fujifilm", "Olympus", "Leica", "Pentax", "GoPro", "DJI"];
console.log(cameraProdusent)

/* FJERNER SISTE "DJI" */
cameraProdusent.pop();
console.log(cameraProdusent);

/* LEGGER TIL "GODOX" SOM SITE ENTRY */
cameraProdusent.push("GODOX")
console.log(cameraProdusent);

console.log('Index 3 er:' + `${cameraProdusent[3]}` + " " + 'Index 7 er:' + `${cameraProdusent[7]}`)


/* Oppgave 1.1:

    Console.log elementet som ligger i index 5 ut i konsollen med tekst som sier: "dette er index 5: ". Dere kan selv velge om det skal være med template literals */

    console.log('Dette er index 5 :' + ` ${cameraProdusent[5]}`)


   /* Oppgave 2
    (se script.js i javascript basics repoet for hint):
    
        Lag et array med 2 eller flere objekter i. Det skal minst være 3 keys i hvert objekt (f.eks firstName, lastName og age)
        BONUS! Legg til en key som inneholder et array (f.eks hobbies) med minst 3 elementer i
        console.log ut all informasjonen. En for hvert objekt (sånn at all informasjonen til et objekt kommer i en console.log */

    const camera = [{
        produsent: "Olympus",
        model: "OMD-EM1",
        mp: "24mp",
        funksjoner: ["Blitz", "IBIS", "2cards"]
        },
        {
        produsent: "Canon",
        model: "50D",
        age: "16mp",
        funksjoner: ["AF", "LiveView", "LCD monitor"]
            },
    
    ];
    
    const camera1 = camera[0]
    
    console.log(`Produsent: ${camera1.produsent} Model: ${camera1.model} 
    Antall cards: ${camera1.funksjoner[2]}`);


    /* Oppgave 3
(se conditionals.js og conditionals2.js i javascript basics repoet for hint):

    Lag en logikk for en bedrift slik som vi har øvd på tidligere. LAG EN NY logikk, ikke bruk samme dere jobbet med på torsdag.
    Det skal være med if og else
    BONUS: Bruk if else minst 2 ganger
    console.log ut resultatet.
 */

    /* SPØRSMÅL: ER DU BEDRIFT ELLER PRIVATPERSON - typ selectbox */
      /* skal vise priser uten mva for bedrift. Og inkl. mva for privatperson */
    
    let visPrisMva = "yes"; // eller "no"

    if (visPrisMva === "default") {
        console.log('Velg bedrift eller privatkunde');
    } else if (visPrisMva === "no") {
        console.log('PRIVAT: Viser priser inkl mva.');
    } else if (visPrisMva === "yes"){
        console.log('BEDRIFT: Viser nettopris, mva kommer i tillegg');
    } else {
        console.log('Ikke valgt - Viser priser inkl mva');
    }


    /* Oppgave 4
    (se conditionals.js og conditionals2.js i javascript basics repoet for hint):
    
        Lag et funksjon som fungerer (husk å bruke return for å få noe ut fra funksjonen du vil at skal være tilgjengelig i konsollen)
        BONUS: Bruk en method vi ikke har gått igjennom enda for å få til noe kult!
        */


        function visTekst(){

            return console.log("FUNKSJON som viser denne teksten.")

        }

        visTekst()

