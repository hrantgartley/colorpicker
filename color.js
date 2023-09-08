/*Javascript color pick functions*/

// -------------------------------------
function slider(color) {
    var R = colorValue("red")
    var G = colorValue("green")
    var B = colorValue("blue")
    var hex = R + G + B
    hex = hex.toUpperCase()

    var colorLegend = document.getElementById("hexcolor")
    colorLegend.innerHTML = "Color: #" + hex

    var swatch = document.getElementById("swatch")
    var context = swatch.getContext("2d")
    context.fillStyle = "#" + hex
    context.fillRect(0, 0, 100, 100)
}

// -------------------------------------
function colorValue(color) {
    let element = document.getElementById(color)
    let value = Number(element.value)
    if (value < 0) {
        value = 0
    }
    element.value = "0"
    if (value > 255) {
        value = 255
        element.value = "255"
    }
    value = value.toString(16)
    if (value.length < 2) {
        value = "0" + value
    }
    return value
}
