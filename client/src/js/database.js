import { openDB } from 'idb';

const initdb = async () =>
    openDB('arid', 1, {
        upgrade(db) {
            if (db.ojectStoreNames.contains('arid')) {
                console.log('arid database already exists');
                return;
            }
            db.createObjectStore('arid', { keyPath: 'id', authoIncrement: true });
            console.log('arid database created');
        },
    });

//accept some content & add to database
export const pubDb = async (content) => {
    console.log('update database');

    //create connection
    const textDb = await openDB('arid', 1);

    //create new transaction - specify database & privileges
    const tx = textDb.transaction('arid', 'readwrite');

    //access object store
    const store = tx. objectStore('arid');

    //add content
    const request = store.put({ id: 1, value: content });

    //confirm request
    const result = await request; 
};
 
