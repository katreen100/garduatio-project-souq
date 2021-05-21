import {useState, useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'

export const useFireStoreAdmins=()=>{
    const [Admins, setAdmins] = useState([])
    useEffect(() => {
        const subscriberAdmins =db.collection('admins').orderBy('createdAt').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(), id:doc.id}
            })
            setAdmins(fetched)
        })
        return subscriberAdmins
    }, [])

    const addAdmin = async (admin)=>{
        await db.collection('admins').add({
            ...admin
        })
    }

    const editAdmin = async (admin)=>{
        await db.collection('admins').doc(admin.id).update({
            ...admin
        })
    }

    const deleteAdmin = async (id)=>{
        await db.collection('admins').doc(id).delete()
    }
    return {Admins, addAdmin, editAdmin, deleteAdmin}
}