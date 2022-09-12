const cards = [["Guadalupe", "Ollie", "Aki"], "surprise"]; // have tried with 

function writeCards(cards) {
    let i = 0; // vs: for (let i = 0; i < cards.length; i++) {
    while (i < cards.length) { // vs. console.log('Thank you, $cards[i]'); for the wonderful surprise gift!');
        console.log('Thank you, ${cards[i]}, for the wonderful surprise gift!'); // for some reason the log message won't print, only the list of names...
        i++; // vs. ______
}

return cards;
}

writeCards(cards);
//LOG: Thank you, Guadalupe, for the wonderful surprise gift!
//LOG: Thank you, Ollie, for the wonderful surprise gift!
//LOG: Thank you, Aki, for the wonderful surprise gift!


// tests 2 and 3 of this assignment worked properly with the following:
let countDown=function(i) {
    console.log(i);
    i>0 && countDown(i-1);
}
    countDown(10);
// This works perfectly.