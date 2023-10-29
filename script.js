function convertTemperature(unit) {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const fahrenheitInput = document.getElementById("fahrenheitInput").value;
    const resultElement = document.getElementById("result");

    if (unit === 'Celsius' && celsiusInput !== '') {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (unit === 'Fahrenheit' && fahrenheitInput !== '') {
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = (fahrenheit - 32) * 5/9;
        resultElement.innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
        resultElement.innerText = "Result: ";
    }
}
