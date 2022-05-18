import { checkAuth, createPost } from '../fetch-utils.js';

const createPostForm = document.getElementById('create-post');

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createPostForm);
    const postObject = { 
        nugget: data.get('nugget'),
        username: data.get('username'),
        origin: data.get('origin'),
    };
    const newPost = await createPost(postObject);
    console.log(newPost);
    location.replace('../');
});

checkAuth();