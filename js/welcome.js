const signUpBtn = document.getElementById('signUpBtn');
const loginBtn = document.getElementById('loginBtn');
const welcomeMessage = document.getElementById('welcomeMessage');
const bottomMessage = document.getElementById('bottom-signUpBtn');

function displayWelcomeMessage() {
    signUpBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    bottomMessage.style.display = 'none';
    welcomeMessage.style.display = 'block';
}

signUpBtn.addEventListener('click', displayWelcomeMessage);
loginBtn.addEventListener('click', displayWelcomeMessage);
bottomMessage.addEventListener('click', displayWelcomeMessage);