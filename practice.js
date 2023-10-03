export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  let variabel = 1 
  // "let" gör en variabel som kan hålla ett värde, t.ex siffra eller text. Den kan ändras på senare.
  const konstant = 1
  // "const" gör en konstant som inte kan ändras på.
  variabel = variabel + konstant
  // variabler kan plussas ihop och ändras på olika sätt
  console.log(variabel, varsAndTypes, typeof(varsAndTypes))
}

function operators(element) {
  // kod för att visa vad du lärt dig om operatorer
  let x = 1 
  if (x = 1){
    x = x + 1
  }
  // "=" definerar eller kollar vad en variabel är
  if (x < 3){
    x = x + 1
  }
  // "<" kollar om värdet till höger är större än det till vänster och ger ett true/false svar
  if (x > 2){
    x = x + 1
  }
  // ">" kollar om värdet till vänster är större än det till höger och ger ett true/false svar
  console.log(x,'operators === ', 1 === 1)
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  // if satser är 
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects (element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}