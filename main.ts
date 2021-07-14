basic.forever(function () {
    let 方位 = 0
    if (方位 > 270 || 方位 < 90) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
