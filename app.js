document.getElementById("convertBtn").addEventListener("click", () => {
  const kelvinInput = document.getElementById("kelvin");
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const error = document.getElementById("error");

  const kVal = kelvinInput.value.trim();
  const cVal = celsiusInput.value.trim();
  const fVal = fahrenheitInput.value.trim();

  error.textContent = ""; // Clear previous error

  const filledFields = [kVal, cVal, fVal].filter(val => val !== "");

  if (filledFields.length !== 1) {
    error.textContent = "Please fill in only one field to convert.";
    return;
  }

  if (kVal !== "") {
    const k = parseFloat(kVal);
    if (isNaN(k)) {
      error.textContent = "Invalid Kelvin input.";
      return;
    }
    const c = k - 273.15;
    const f = (c * 9/5) + 32;
    celsiusInput.value = c.toFixed(2);
    fahrenheitInput.value = f.toFixed(2);
  } else if (cVal !== "") {
    const c = parseFloat(cVal);
    if (isNaN(c)) {
      error.textContent = "Invalid Celsius input.";
      return;
    }
    const k = c + 273.15;
    const f = (c * 9/5) + 32;
    kelvinInput.value = k.toFixed(2);
    fahrenheitInput.value = f.toFixed(2);
  } else if (fVal !== "") {
    const f = parseFloat(fVal);
    if (isNaN(f)) {
      error.textContent = "Invalid Fahrenheit input.";
      return;
    }
    const c = (f - 32) * 5/9;
    const k = c + 273.15;
    celsiusInput.value = c.toFixed(2);
    kelvinInput.value = k.toFixed(2);
  }
});
