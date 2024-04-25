const fahrenheit = Number(prompt("Zadejte teplotu ve stupních Fahrenheita"))

const celsius = (5 *(fahrenheit - 32)) / 9

document.body.innerHTML += "<p>" + fahrenheit + "F = " + celsius + "C</p>"