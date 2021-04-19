import db from '../firebase/firebaseConfig';

export function getAllOrderNames() {
    return db.collection('Order')
             .get()
             .then(reponse => {
                 return reponse.docs.map(doc => {
                     console.log(doc.data());
                     return doc.data();
                 })
             })
             .catch(e => console.log(e));
}