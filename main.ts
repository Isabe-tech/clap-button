input.onLoudSound(function () {
    light.setBrightness(20)
    light.setAll(0x00ff00)
    pause(2000)
    light.setAll(0x000000)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (randint(0, 10) < 5) {
        light.showAnimation(light.sparkleAnimation, 2000)
    } else {
        light.showAnimation(light.runningLightsAnimation, 2000)
    }
})
forever(function () {
	
})
