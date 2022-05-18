// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';
// let state
const mainSection = document.getElementById('sticky-notes');
// fetches the array from supabase
async function loadData() {
    const nuggetArray = await fetchPosts();
    console.log('hi from loadData', nuggetArray);
    for (let nugget of nuggetArray) {
        const postDiv = renderPost(nugget);
        mainSection.append(postDiv);
    }
}
loadData();

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
