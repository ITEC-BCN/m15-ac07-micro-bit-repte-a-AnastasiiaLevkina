let randomIcon = 0
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
