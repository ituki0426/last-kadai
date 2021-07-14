basic.forever(function () {
    let 方位 = 0
    if (方位 > 377.5 || 方位 < 22.5) {
        basic.showArrow(ArrowNames.North)
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (方位 < 67.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (方位 < 112.5) {
        basic.showArrow(ArrowNames.West)
    } else if (方位 < 157.5) {
    	
    } else if (方位 < 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (方位 < 247.5) {
    	
    } else if (方位 < 292.5) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
