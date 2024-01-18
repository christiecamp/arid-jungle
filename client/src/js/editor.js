//import methods - save & get data from database
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
    constructor () {
        const localData = localStorage.getItem('content');
        //check codemirror
        if (typeof CodeMirror === 'undefined') {
            throw new Error(`CodeMirror isn't loaded`);
        }
        this.editor = CodeMirror(document.querySelector('#main'), {
            value: '',
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            indentUnit: 2,
            tabSize: 2,
        });

        //set value - indexdb output
        getDb().then((data) => {
            console.info('Loaded data from indexeddb - injecting into editor');
            //no output - fallback to local storage or display header
            this.editor.setValue(data || localData || header);
        });

        this.editor.on('change', () => {
            localStorage.setItem('content', this.editor.getValue());
        });

        //save editor content
        this.editor.on('blur', () => {
            console.log('editor lost focus');
            putDb(localStorage.getItem('content'));
        });
    }
}