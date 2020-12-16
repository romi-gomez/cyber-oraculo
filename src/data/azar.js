import deck from './cards.json'

let spread = [0, 0, 0]
let result = []


const getSpread = () => {

    for (let i = 0; i < spread.length; i++) {

        spread[i] = Math.floor((Math.random() * 22));

        deck.forEach(card => {
            if (card.order === spread[i]) {
                result.push(card)
                card.selectedPhrase = getPhrase(card.phrases)
            }
        })
    }
}


const getPhrase = (phrases) => {

    let selectedPhrase = Math.floor((Math.random() * phrases.length));
    return (phrases[selectedPhrase])
}


getSpread()

console.log(result)

export default result