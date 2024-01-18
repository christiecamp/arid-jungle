import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
    <div class="loading-container">
    <div class="loading-spinner"/>
    </div>
    `;
    main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
    loadSpinner();
}

//check support for sws
if ('serviceWorker' in navigator) {
    //register workbox sw
    const workboxSW = new Workbox('./src-sw.js');
    workboxSW.register();
} else {
    console.error('service workers are not supported in broswer');
}

