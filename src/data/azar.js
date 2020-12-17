import deck from './cards.json'

let spread = [0, 0, 0]
let result = []


const getSpread = () => {

    for (let i = 0; i < spread.length; i++) {

        spread[i] = getRandomNumber(0, 21);

        deck.forEach(card => {
            if (card.order === spread[i]) {
                result.push(card)
                card.selectedPhrase = getPhrase(card.phrases)
            }
        })
    }
}


const getPhrase = (phrases) => {

    let selectedPhrase = getRandomNumber(0, phrases.length);
    return (phrases[selectedPhrase])
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


getSpread()

console.log(result)

export { result, getRandomNumber }
