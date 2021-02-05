input.onButtonPressed(Button.A, function () {
    Timer = randint(5, 15)
    basic.showIcon(IconNames.SmallSquare)
    while (Timer > 0) {
        basic.pause(1000)
        Timer += -1
    }
    basic.showIcon(IconNames.No)
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(156, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(139, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Double))
})
let Timer = 0
basic.showLeds(`
    . . # . .
    . # # . .
    # # # # #
    . # # . .
    . . # . .
    `)
basic.forever(function () {
	
})
