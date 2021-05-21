import {useState, useEffect} from 'react'
import {db} from '../../network/firebase/firebaseConfig'

export const useFireStoreBrands=()=>{
    const [brands, setBrands] = useState([])
    useEffect(() => {
        const subscriberBrands =db.collection('brands').orderBy('createdAt').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(), id:doc.id}
            })
            setBrands(fetched)
        })
        return subscriberBrands
    }, [])

    const addBrand =async (brand)=>{
        await db.collection('brands').add({
            ...brand
        })
    }

    const deleteBrand =async (id)=>{
        await db.collection('brands').doc(id).delete()
    }
    return {brands, addBrand, deleteBrand}
}