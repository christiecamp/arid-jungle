const butInstall = document.getElementById('buttonInstall');

//install pwa
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'install!';
});

//implement click event handler
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = '🐒 installed!';
});

//add handler - appinstalled
window.addEventListener('appinstalled', (event) => {
    console.log('🌴✨', 'appinstalled', event);
});