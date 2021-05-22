import {useState, useEffect} from 'react'
import {db} from '../../network/firebase/firebaseConfig'

export const useFireStoreOrders=()=>{
    const [Orders, setOrders] = useState([])
    useEffect(() => {
        const subscriberOrders =db.doc('user/orders').orderBy('checkoutDate').onSnapshot(snap =>{
            let fetched = snap.docs.map(doc =>{
                return {...doc.data(), id:doc.id}
            })
            setOrders(fetched)
        })
        return subscriberOrders
    }, [])

    const addOrder = async (order)=>{
        await db.doc('user/orders').add({
            ...order
        })
    }

    const editOrder = async (order)=>{
        await db.doc('user/orders').doc(order.id).update({
            ...order
        })
    }

    const deleteOrder = async (id)=>{
        await db.doc('user/orders').doc(id).delete()
    }
    return {Orders, addOrder, editOrder, deleteOrder}
}