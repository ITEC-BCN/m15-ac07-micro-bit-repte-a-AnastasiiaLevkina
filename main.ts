let player_choice = 0
let machine_choice = 0
let random_choice_var = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    player_choice = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    machine_turn()
    mostrar_resultat()
})
function machine_turn() {
    
    basic.pause(1000)
    machine_choice = random_choice()
    if (machine_choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (machine_choice == 2) {
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
    
}

function random_choice(): number {
    
    random_choice_var = randint(1, 3)
    return random_choice_var
}

input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    player_choice = random_choice()
    if (player_choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (player_choice == 2) {
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
    
    machine_turn()
    mostrar_resultat()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    player_choice = 3
    basic.showLeds(`
        . # . . #
        # . # # .
        . # # . .
        # . # # .
        . # . . #
        `)
    machine_turn()
    mostrar_resultat()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    player_choice = 2
    basic.showLeds(`
        . . # # .
        . # # # #
        # # # # #
        # # # # .
        . # # . .
        `)
    machine_turn()
    mostrar_resultat()
})
function mostrar_resultat() {
    if (machine_choice == 1 && player_choice == 2) {
        basic.showString("You win!")
    } else if (machine_choice == 2 && player_choice == 3) {
        basic.showString("You win!")
    } else if (machine_choice == 3 && player_choice == 1) {
        basic.showString("You win!")
    } else if (player_choice == 1 && machine_choice == 2) {
        basic.showString("You lose!")
    } else if (player_choice == 2 && machine_choice == 3) {
        basic.showString("You lose!")
    } else if (player_choice == 3 && machine_choice == 1) {
        basic.showString("You lose!")
    } else {
        basic.showString("It's an even!")
    }
    
}

