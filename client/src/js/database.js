import { openDB } from 'idb';

const initdb = async () => {
    openDB('avid', 2, {
        upgrade(db) {
            if (db.objectStoreNames.contains('avid')) {
                console.log('avid database already exists');
                return;
            }
            db.createObjectStore('avid', { keyPath: 'id', autoIncrement: true });
            console.log('avid database created');
        },
    });
};

//accept some content & add to database
export const putDb = async (content) => {
    try {
    console.log('update database');
    //create connection
    const textDb = await openDB('avid', 2);
    //create new transaction - specify database & privileges
    const tx = textDb.transaction('avid', 'readwrite');
    //access object store
    const store = tx.objectStore('avid');
    //add content
    const request = store.put({ value: content });
    //confirm request
    const result = await request;
    console.log('🐒 - data saved to database', result);
    } catch (err) {
        console.log(err);
    }
};

//get all content from database
export const getDb = async () => {
    try {
    console.log('get database');
    //create connection
    const textDb = await openDb('avid', 2);
    //create new transaction - specify database & privileges
    const tx = textDb.transaction('avid', 'readonly');
    //access object store
    const store = tx.objectStore('avid');
    //get content - stored data 
    const request = store.getAll();
    //confirm request
    const result = await request; 
    console.log('result.value', result);
    // return result?.value;
    } catch (err) {
        console.log(err);
    }
};

initdb();
 
