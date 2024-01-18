import { openDB } from 'idb';

const initdb = async () =>
    openDB('arid', 2, {
        upgrade(db) {
            if (db.objectStoreNames.contains('arid')) {
                console.log('arid database already exists');
                return;
            }
            db.createObjectStore('arid', { keyPath: 'id', authoIncrement: true });
            console.log('arid database created');
        },
    });

//accept some content & add to database
export const putDb = async (content) => {
    console.log('update database');
    //create connection
    const textDb = await openDB('arid', 2);
    //create new transaction - specify database & privileges
    const tx = textDb.transaction('arid', 'readwrite');
    //access object store
    const store = tx.objectStore('arid');
    //add content
    const request = store.put({ id: 1, value: content });
    //confirm request
    const result = await request;
    console.log('🐒 - data saved to database', result);
};

//get all content from database
export const getDb = async () => {
    console.log('get database');
    //create connection
    const textDb = await openDb('arid', 2);
    //create new transaction - specify database & privileges
    const tx = textDb.transaction('arid', 'readonly');
    //access object store
    const store = tx.objectStore('arid');
    //get content - stored data 
    const request = store.getAll();
    //confirm request
    const result = await request; 
    console.log('result.value', result);
    return result?.value;
};

initdb();
 
