const form = document.querySelector('form');
const beratBadanInput = document.querySelector('#berat-badan');
const tinggiBadanInput = document.querySelector('#tinggi-badan');
const usiaInput = document.querySelector('#usia');
const bmiOutput = document.querySelector('#bmi');
const kategoriBmiOutput = document.querySelector('#kategori-bmi');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validasi input data
  if (!isNumeric(beratBadanInput.value) || !isNumeric(tinggiBadanInput.value) || !isNumeric(usiaInput.value)) {
    alert('Masukkan data yang valid!');
    return;
  }

  // Hitung BMI
  const bmi = calculateBmi(beratBadanInput.value, tinggiBadanInput.value);

  // Tampilkan hasil
  bmiOutput.textContent = bmi.toFixed(2);
  kategoriBmiOutput.innerHTML = getKategoriBmi(bmi);
});

function calculateBmi(beratBadan, tinggiBadan) {
  return beratBadan / (tinggiBadan / 100)**2;
}

function getKategoriBmi(bmi) {
  if (bmi < 18.5) {
    return '<li>Kurus</li>';
  } else if (bmi < 25) {
    return '<li>Normal</li>';
  } else if (bmi < 30) {
    return '<li>Kelebihan berat badan</li>';
  } else {
    return '<li>Obesitas</li>';
  }
}

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

