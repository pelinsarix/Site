const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const emailValue = emailInput.value;
	const passwordValue = passwordInput.value;
	
	// aqui você pode colocar a lógica para validar o email e a senha
});
