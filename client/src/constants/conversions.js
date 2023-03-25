//  Kelvin to Celsius
export function kelvinToCelsius(kelvin) {
  let celsius = kelvin - 273.15;
  return celsius.toFixed(2);
}

//  Kelvin to Fahrenheit
export function kelvinToFahrenheit(kelvin) {
  let fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
}
