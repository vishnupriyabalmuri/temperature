document
  .getElementById("tempConverter")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (temperature * 9) / 5 + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = ((temperature - 32) * 5) / 9;
    } else {
      result = temperature; // Default, no conversion needed
    }

    document.getElementById("result").value = result.toFixed(2);
  });
