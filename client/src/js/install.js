const button = document.getElementById('button');
let deferredPrompt;

//install pwa
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    //store event
    deferredPrompt = event;
    //remove hidden class
    button.style.display = 'block';
});

//implement click event handler
button.addEventListener('click', async () => {
    if (deferredPrompt) {
        //show prompt
        deferredPrompt.prompt();
        //wait for user response
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('🌴✨', 'User accepted the install prompt');
        } else {
            console.log('🌴✨', 'User dismissed the install prompt');
        }
        //reset the deferred prompt
        deferredPrompt = null;
        button.style.display = 'none';
    }
});

//add handler - appinstalled
window.addEventListener('appinstalled', (event) => {
    console.log('🌴✨', 'appinstalled', event);
    //clear prompt
    window.deferredPrompt = null;
});