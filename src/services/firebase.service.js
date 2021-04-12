import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig, { auth } from "../firebase";

const store = firebaseConfig.firestore();
const db = store.collection('items');

export default {
    createUser: async (email, password) => {
        auth.createUserWithEmailAndPassword(email, password).then((u) => {
        }).catch(error => {
            alert(`${error}`);
        });
    },
    getItems: async (userId) => {
        let list = [];
        let results = await db.get();
        results.forEach(result => {
            let data = result.data();
            if(data.userId === userId) {
                list.push({
                    id: result.id,
                    userId: data.userId,
                    title: data.title,
                    description: data.description
                });
            }
        });
        return list;
    },
    addItem: async (data) => {
       return await db.add(data);
    },
    editItem: async (id, data) => {
        return await db.doc(id).update(data);
    },
    deleteItem: async (id) => {
        return await db.doc(id).delete();
    }
}