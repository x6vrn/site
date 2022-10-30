let color1 = document.getElementById("color1")
const color2 = document.getElementById("color-2")
const color3 = document.getElementById("color-3")
const color4 = document.getElementById("color-4")
const color5 = document.getElementById("color-5")
const color6 = document.getElementById("color-6")
let back = document.getElementById("back")

color1.addEventListener("click", () => {
    back.style.backgroundColor = "#D3692E"
})
color2.addEventListener("click", () => {
    back.style.backgroundColor = "#3796CB"
})
color3.addEventListener("click", () => {
    back.style.backgroundColor = "#32C040"
})
color4.addEventListener("click", () => {
    back.style.backgroundColor = "#B22FC8"
})
color5.addEventListener("click", () => {
    back.style.backgroundColor = "#F9D61F"
})
color6.addEventListener("click", () => {
    back.style.backgroundColor = "#181a1d"
    
})
