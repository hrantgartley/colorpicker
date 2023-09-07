/*Javascript color pick functions*/

const slider = (color) => {
    var R = colorValueInHex("red")
    var G = colorValueInHex("green")
    var B = colorValueInHex("blue")
    var hex = R + G + B
    hex = hex.toUpperCase()

    var colorLegend = document.getElementById("hexcolor")
    colorLegend.innerHTML = "Color: #" + hex

    var swatch = document.getElementById("swatch")
    var context = swatch.getContext("2d")
    context.fillStyle = "#" + hex
    context.fillRect(0, 0, 100, 100)
}
const colorValueInHex = (color) => {}
