import { redirectIfLoggedIn, signUpUser } from '../fetch-utils.js';

const signUpForm = document.getElementById('sign-up');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    // console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/');
    }
});