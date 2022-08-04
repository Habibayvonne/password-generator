let generateBtn = document.getElementById('generate')
let decrementBtn = document.getElementById('decrement')
let incrementBtn = document.getElementById('increment')
let lengthInput = document.getElementById('password-length')
let passwordEls = document.querySelectorAll('.password')



function updateLength(number) {
  number = Number(number)  // make sure number is not a string

  if (number >= 8 && number <= 20) {
    passwordLength = number
  } else {
    alert("Password length must be between 8 and 20 characters.")
  }

  lengthInput.value = passwordLength
}

function generatePassword() {
  let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
  let password = " "
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }

  return password
}

function generatePasswords() {
  // generate a list of passwords based on the number of password elements
  let passwords = []
  for (let i = 0; i < passwordEls.length; i++) {
    const password = generatePassword()
    passwords.push(password)
  }

  // display the passwords on the page
  for (let i = 0; i < passwords.length; i++) {
    passwordEls[i].textContent = passwords[i]
    passwordEls[i].classList.remove('hidden')
  }
}

let passwordLength = 15
lengthInput.value = passwordLength


decrementBtn.addEventListener('click', () => updateLength(passwordLength - 1))
incrementBtn.addEventListener('click', () => updateLength(passwordLength + 1))
lengthInput.addEventListener('blur', () => updateLength(lengthInput.value))

generateBtn.addEventListener('click', generatePasswords)
