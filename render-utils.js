export function renderPost(postData) {
    // const stickyNoteEl = document.createElement('sticky-note');
    const postsEl = document.createElement('post-div');
    const nuggetEl = document.createElement('nugget');
    const usernameEl = document.createElement('p');
    const originEl = document.createElement('p');

    postsEl.classList.add('posts');

    nuggetEl.textContent = postData.nugget;
    usernameEl.textContent = postData.username;
    originEl.textContent = postData.origin;
    console.log(postData);

    postsEl.append(nuggetEl, usernameEl, originEl);
    return postsEl;
}


