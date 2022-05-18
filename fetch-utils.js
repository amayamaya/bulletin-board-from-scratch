const SUPABASE_URL = 'https://yhletbviclmzgnzikzpu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobGV0YnZpY2xtemduemlrenB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTUzMjIsImV4cCI6MTk2Nzg3MTMyMn0.NSJ1Tw-LlfLsXJF4Y_nS3pwZV2TB7Ru8jvAsLxQLJWg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//returns a client if there is one
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

// automatically redirects user back to the login page if not authorized
export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('/auth-page');
}

export async function fetchPosts() {
    // console.log('what shows?');
    const response = await client.from('wizdom').select('*');
    // console.log('response.data', response.data);
    return response.data;
}


export async function logout() {
    await client.auth.signOut();
 
    return (window.location.href = '/');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./auth-page');
    }
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        // console.error(response.error);
    }
}