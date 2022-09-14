basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
    }
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
    }
})
