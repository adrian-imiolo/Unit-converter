let meterEl = document.getElementById("meter-convert")
let volumeEl = document.getElementById("volume-convert")
let massEl = document.getElementById("mass-convert")
let numEl = document.getElementById("num-el")

addEventListener ("click", function() {
    
let baseValue = numEl.value

meterEl.textContent = `${baseValue} meters = ${(baseValue * 3.281).toFixed(3)} feet | ${baseValue} 
feet = ${(baseValue / 3.281).toFixed(3)} feet`

volumeEl.textContent = `${baseValue} liters = ${(baseValue * 0.264).toFixed(3)} gallons | ${baseValue} 
gallons = ${(baseValue / 0.264).toFixed(3)} liters`

massEl.textContent = `${baseValue} kilos = ${(baseValue * 2.204).toFixed(3)} pounds | ${baseValue}  
pounds = ${(baseValue / 2.204).toFixed(3)} kilos`
}
)
// chcesz zrobić z numEl liczbę, żeby mnożnik meterEl działał
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/