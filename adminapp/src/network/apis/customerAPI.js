import {useState, useEffect} from 'react'
import {db} from '../firebase/firebaseConfig'

export const useFireStoreCustomers=()=>{
    const [Customers, setCustomers] = useState([])
    useEffect(() => {
        const subscriberCustomers =db.collection('user').orderBy('registerationDate').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(), id:doc.id}
            })
            setCustomers(fetched)
        })
        return subscriberCustomers
    }, [])

    const addCustomer = async (customer)=>{
        await db.collection('Customers').add({
            ...customer
        })
    }

    const editCustomer = async (customer)=>{
        await db.collection('Customers').doc(customer.id).update({
            ...customer
        })
    }

    const deleteCustomer = async (id)=>{
        await db.collection('Customers').doc(id).delete()
    }
    return {Customers, addCustomer, editCustomer, deleteCustomer}
}