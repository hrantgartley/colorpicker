/*Javascript color pick functions*/

// -------------------------------------
// eslint-disable-next-line no-unused-vars
function slider() {
    var R = colorValue("red")
    var G = colorValue("green")
    var B = colorValue("blue")
    var hex = "#" + R + G + B // Add "#" before the hex value

    var colorLegend = document.getElementById("hexColor") // Correct the element ID
    colorLegend.innerHTML = "Color: " + hex // Update the innerHTML

    var swatch = document.getElementById("swatch")
    var context = swatch.getContext("2d")
    context.fillStyle = hex // Use the hex color directly
    context.clearRect(0, 0, swatch.width, swatch.height) // Clear the canvas
    context.fillRect(0, 0, swatch.width, swatch.height) // Fill the canvas with the new color
}

// -------------------------------------

function colorValue(color) {
    let element = document.getElementById(color)
    let value = Number(element.value)
    if (value < 0) {
        value = 0
    }
    if (value > 255) {
        value = 255
    }
    value = value.toString(16)
    if (value.length < 2) {
        value = "0" + value
    }
    return value
}
