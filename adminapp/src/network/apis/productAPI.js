import {useState, useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'

export const useFireStoreProducts=()=>{
    const [Products, setProducts] = useState([])
    useEffect(() => {
        const subscriberProducts =db.collection('ParentProduct').orderBy('createdAt').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                console.log(doc.data())
                return {...doc.data(), id:doc.id}
            })
            setProducts(fetched)
        })
        
        return subscriberProducts
    }, [])

    const addProduct = async (product)=>{
        await db.collection('ParentProduct').add({
            ...product
        })
    }

    const editProduct = async (product)=>{
        await db.collection('ParentProduct').doc(product.id).update({
            ...product
        })
    }

    const deleteProduct = async (id)=>{
        await db.collection('ParentProduct').doc(id).delete()
    }
    return {Products, addProduct, editProduct, deleteProduct}
}