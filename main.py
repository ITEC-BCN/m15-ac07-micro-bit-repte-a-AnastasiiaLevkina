randomIcon = 0

def on_gesture_shake():
    global randomIcon
    randomIcon = randint(1, 3)
    if randomIcon == 1:
        pass
    elif randomIcon == 2:
        pass
    else:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
