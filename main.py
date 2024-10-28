player_choice = 0
machine_choice = 0
random_choice_var = 0

def on_button_pressed_a():
    global player_choice
    player_choice = 1
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    machine_turn()
    mostrar_resultat()
input.on_button_pressed(Button.A, on_button_pressed_a)

def machine_turn():
    global machine_choice
    basic.pause(1000)
    machine_choice = random_choice()
    if machine_choice == 1:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
    elif machine_choice == 2:
        basic.show_leds("""
            . . # # .
            . # # # #
            # # # # #
            # # # # .
            . # # . .
            """)
    else:
        basic.show_leds("""
            . # . . #
            # . # # .
            . # # . .
            # . # # .
            . # . . #
            """)
def random_choice():
    global random_choice_var
    random_choice_var = randint(1, 3)
    return random_choice_var

def on_gesture_shake():
    global player_choice
    player_choice = random_choice()
    if player_choice == 1:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
    elif player_choice == 2:
        basic.show_leds("""
            . . # # .
            . # # # #
            # # # # #
            # # # # .
            . # # . .
            """)
    else:
        basic.show_leds("""
            . # . . #
            # . # # .
            . # # . .
            # . # # .
            . # . . #
            """)
    machine_turn()
    mostrar_resultat()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global player_choice
    player_choice = 3
    basic.show_leds("""
        . # . . #
        # . # # .
        . # # . .
        # . # # .
        . # . . #
        """)
    machine_turn()
    mostrar_resultat()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global player_choice
    player_choice = 2
    basic.show_leds("""
        . . # # .
        . # # # #
        # # # # #
        # # # # .
        . # # . .
        """)
    machine_turn()
    mostrar_resultat()
input.on_button_pressed(Button.B, on_button_pressed_b)

def mostrar_resultat():
    if machine_choice == 1 and player_choice == 2:
        basic.show_string("You win!")
    elif machine_choice == 2 and player_choice == 3:
        basic.show_string("You win!")
    elif machine_choice == 3 and player_choice == 1:
        basic.show_string("You win!")
    elif player_choice == 1 and machine_choice == 2:
        basic.show_string("You lose!")
    elif player_choice == 2 and machine_choice == 3:
        basic.show_string("You lose!")
    elif player_choice == 3 and machine_choice == 1:
        basic.show_string("You lose!")
    else:
        basic.show_string("It's an even!")