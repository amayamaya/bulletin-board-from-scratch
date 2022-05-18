// import functions and grab DOM elements
import { fetchPosts, getUser, checkAuth, logout } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

// let state
const postsEl = document.getElementById('sticky-notes');
// fetches the array from supabase
async function loadData() {
    const nuggetArray = await fetchPosts();
    // console.log('hi from loadData', nuggetArray);
    for (let nugget of nuggetArray) {
        const postDiv = renderPost(nugget);
        postsEl.append(postDiv);
    }
}


// set event listeners
const headerButton = document.getElementById('header-button');
async function handleLogout(){
    await logout();
}
async function handleAuth() {
    window.location.href = '/auth-page';
}

const user = getUser();
if (user) {
    headerButton.textContent = 'Logout';
    headerButton.addEventListener('click', handleLogout);

    headerButton.classList.remove('hide');  
} else {
    headerButton.textContent = 'Sign In / Sign Up';
    headerButton.addEventListener('click', handleAuth);
    headerButton.classList.remove('hide');
}
// get user input
// use user input to update state
// update DOM to reflect the new state
loadData();
checkAuth();