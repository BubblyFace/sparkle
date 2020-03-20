export class Roulette {
    public status: String = ''

    constructor() {

    }
    
    transitionHanlder() {
        
    }

    create() {
        const container: HTMLElement  = document.createElement('div')
        const numberArray: Number [] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        container.className = 'roulette-container'
        numberArray.forEach(function (number: Number) {
            let numDom: HTMLElement = document.createElement('div')

            numDom.innerText = String(number)
            container.appendChild(numDom)
        })

        return container
    }
}