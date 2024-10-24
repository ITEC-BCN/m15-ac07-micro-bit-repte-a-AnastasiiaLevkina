let randomIcon = 0
let randomIcon2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    randomIcon = randint(1, 3)
    if (randomIcon == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (randomIcon == 2) {
        basic.showLeds(`
            . . # # .
            . # # # #
            # # # # #
            # # # # .
            . # # . .
            `)
    } else {
        basic.showLeds(`
            . # . . #
            # . # # .
            . # # . .
            # . # # .
            . # . . #
            `)
    }
    basic.pause(1000)
    randomIcon2 = randint(1, 3)
    if (randomIcon == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (randomIcon == 2) {
        basic.showLeds(`
            . . # # .
            . # # # #
            # # # # #
            # # # # .
            . # # . .
            `)
    } else {
        basic.showLeds(`
            . # . . #
            # . # # .
            . # # . .
            # . # # .
            . # . . #
            `)
    }
    if (randomIcon == 1 && randomIcon2 == 3 || (randomIcon == 2 && randomIcon2 == 1 || randomIcon == 3 && randomIcon2 == 2)) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . . #
        # . # # .
        . # # . .
        # . # # .
        . # . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . # # # #
        # # # # #
        # # # # .
        . # # . .
        `)
})
