import {useState, useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'

export const useFireStoreBrands=()=>{
    const [Brands, setBrands] = useState([])
    useEffect(() => {
        const subscriberBrands =db.collection('brands').orderBy('createdAt').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(), id:doc.id}
            })
            setBrands(fetched)
        })
        return subscriberBrands
    }, [])

    const addBrand = async (brand)=>{
        await db.collection('brands').add({
            ...brand
        })
    }

    const editBrand = async (brand)=>{
        await db.collection('brands').doc(brand.id).update({
            ...brand
        })
    }

    const deleteBrand = async (id)=>{
        await db.collection('brands').doc(id).delete()
    }
    return {Brands, addBrand, editBrand, deleteBrand}
}