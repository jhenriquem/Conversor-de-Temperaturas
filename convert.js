var result = 0;

const selectTemperature = document.getElementById("selectTemperature");
const btnConvert = document.querySelectorAll(".convert");

const convertedTemperature = document.querySelector(".convertedTemperature");
const temperatureValue = document.querySelector(".temperatureValue");

btnConvert.forEach((button) =>
  button.addEventListener("click", () => Convert_Temperature(button.value))
);

//=======================================================================
//                       MAIN FUNCTION
//=======================================================================
function Convert_Temperature(value_button) {
  let temperatureType =
    selectTemperature.options[selectTemperature.selectedIndex].value;
  let value = parseFloat(temperatureValue.value);

  if (value_button == "Celsius") {
    convertedTemperature.innerText =
      convert_Celsius(temperatureType, value) + " °C";
  } else if (value_button == "Fahrenheit") {
    convertedTemperature.innerText =
      convert_Fahrenheit(temperatureType, value) + " °F";
  } else {
    convertedTemperature.innerText =
      convert_Kelvin(temperatureType, value) + " °K";
  }
}

// --------------------------------------------------
//               Cenvert to Celsius
// --------------------------------------------------
function convert_Celsius(temperatureType, value) {
  if (temperatureType == "Fah") {
    result = (value - 32) * (5 / 9);
  } else if (temperatureType == "Kel") {
    result = value - 273.15;
  } else {
    result = value;
  }
  return result.toFixed(2);
}

// --------------------------------------------------
//               Cenvert to Fahrenheit
// --------------------------------------------------
function convert_Fahrenheit(temperatureType, value) {
  if (temperatureType == "Cel") {
    result = value * (9 / 5) + 32;
  } else if (temperatureType == "Kel") {
    result = (value - 273.15) * (9 / 5) + 32;
  } else {
    result = value;
  }
  return result.toFixed(2);
}

// --------------------------------------------------
//               Cenvert to Kelvin
// --------------------------------------------------
function convert_Kelvin(temperatureType, value) {
  if (temperatureType == "Fah") {
    result = (value - 32) * (5 / 9) + 273.15;
  } else if (temperatureType == "Cel") {
    result = value + 273.15;
  } else {
    result = value;
  }
  return result.toFixed(2);
}
