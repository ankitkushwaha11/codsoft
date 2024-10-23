const display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
  display.value += character;
  adjustDisplaySize();
}

function calculateResult() {
  try {
    display.value = eval(display.value) || '';
    adjustDisplaySize();
  } catch {
    display.value = 'Error';
    adjustDisplaySize();
  }
}

function adjustDisplaySize() {
  if (display.scrollWidth > display.clientWidth) {
    display.style.fontSize = '1.5rem';
  } else {
    display.style.fontSize = '2rem';
  }
}

