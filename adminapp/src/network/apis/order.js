import {db} from '../firebase/firebaseConfig';

// export function getAllOrderNames() {
//     return db.collection('Order')
//             //  .onSnapshot((data) => {return data.doc()})
//             .get()
//              .then(reponse => {
//                  return reponse.docs.map(doc => {
//                      console.log(doc.data());
//                      return doc.data();
//                  })
//              })
//              .catch(e => console.log(e));

            
//             // real time effect change 
// }

// export function getAllOrderNames() {
//     return db.collection('Order')
//              .get()
//              .then(reponse => {
//                  return reponse.docs.map(doc => {
//                      console.log(doc.data());
//                      return doc.data();
//                  })
//              })
//              .catch(e => console.log(e));
// }

// export function getAllOrderNames() {
//     return db.collection('Order')
//              .onSnapshot((sna) => {
//                 return sna;
//              })
             
// }


// , ref => {ref.where ("id" , "==" , test)}
export function deleteOrderNames(test) {
    
    console.log(test);

    db.collection('Order').doc(test.DocID)
             .delete()
             .then(()=>{
                 console.log("deleted ...")
             })
             .catch((error)=>{
                console.log(error);
             })
             
}

export function updateOrderNames(){
    console.log("fdkjkjfdv");

  
}