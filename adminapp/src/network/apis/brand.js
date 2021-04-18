import db from '../firebase/firebaseConfig';

export function getAllBrandNames() {
    return db.collection('brands')
             .get()
             .then(reponse => {
                 return reponse.docs.map(doc => {
                     console.log(doc.data());
                     return doc.data();
                 })
             })
             .catch(e => console.log(e));
}