
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("nice!");
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);