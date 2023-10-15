const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');
const contentContainer = document.getElementById('contentContainer');

const authChannel = new BroadcastChannel('authChannel');

const updateAuthState = (loggedIn) => {
    if (loggedIn) {
        localStorage.setItem('userAuthenticated', 'true');
        console.log("user signrd in")

    } else {
        localStorage.removeItem('userAuthenticated');
        console.log("user signed out")
    }
};

signInButton.addEventListener('click', () => {
    updateAuthState(true);
    contentContainer.innerHTML = 'User signed in.';
    authChannel.postMessage('UserSignedIn');
});

signOutButton.addEventListener('click', () => {
    updateAuthState(false);
    contentContainer.innerHTML = 'User signed out.';
    authChannel.postMessage('UserSignedOut');
});

authChannel.addEventListener('message', (event) => {
    contentContainer.innerHTML = `Broadcast received: ${event.data}`;
});