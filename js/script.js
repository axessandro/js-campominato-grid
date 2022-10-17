// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselleper ognun a delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const playBtn = document.getElementById("play-btn");
console.log(playBtn);
const wrapper = document.getElementById("wrapper");
const arrayRndOrder = rndNumberOrderGen(100);

// at click
playBtn.addEventListener("click", function(){

    for (let i = 0; i < arrayRndOrder.length; i++){
        const thisNumber = arrayRndOrder[i];
        // generate cells
        const thisCell = cellGenerator();
        // apppend thisNumber to cells
        thisCell.append(thisNumber)
        // append cells in DOM
        wrapper.append(thisCell)
    };
});



// FUNCTIONS
/**
 * Description: Generate a random order of cellNumbers
 * @param {number} cellNumbers
 * @returns {array} array with random order of numbers
 */
function rndNumberOrderGen(cellNumbers) {
    const arrayNumbers = [];
    while (arrayNumbers.length < cellNumbers) {
        const rndNumber = Math.floor(Math.random() * (cellNumbers - 1 + 1) ) + 1;
        // if number is included in array DONT push
        if (!arrayNumbers.includes(rndNumber)) {
            arrayNumbers.push(rndNumber);
        }
    }
    // return arraynumbers
    return arrayNumbers;
}

/**
 * Description: generate cells
 * @param {number} thisNumber number to insert 
 * @returns {any}
 */
function cellGenerator() {
    // create div
    const cell = document.createElement("div");
    // add classes
    cell.classList.add("ms-cell");
    cell.classList.add("cellx100");
    //  return cells
    return cell;
}