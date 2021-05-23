import {useState, useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'

export const useFireStoreCategories=()=>{
    const [Categories, setCategories] = useState([])
    useEffect(() => {
        const subscriberCategories =db.collection('categoryEnglish').orderBy('createdAt').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(), id:doc.id}
            })
            setCategories(fetched)
        })
        return subscriberCategories
    }, [])

    const addCategory = async (category)=>{
        await db.collection('categoryEnglish').add({
            ...category
        })
    }

    const editCategory = async (category)=>{
        await db.collection('categoryEnglish').doc(category.id).update({
            ...category
        })
    }

    const deleteCategory = async (id)=>{
        await db.collection('categoryEnglish').doc(id).delete()
    }
    return {Categories, addCategory, editCategory, deleteCategory}
}