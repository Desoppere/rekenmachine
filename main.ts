input.onButtonPressed(Button.A, function () {
    getalA += 1
    if (getalA == 10) {
        getalA = 0
    }
    basic.showNumber(getalA)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(getalA * getalB)
})
input.onButtonPressed(Button.B, function () {
    getalB += 1
    if (getalB == 10) {
        getalB = 0
    }
    basic.showNumber(getalB)
})
let getalB = 0
let getalA = 0
basic.clearScreen()
basic.forever(function () {
	
})
