import { useState, useEffect } from 'react';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
import { deleteOrderNames } from '../../network/apis/order';
import db from '../../network/firebase/firebaseConfig';
import { PanoramaVerticalSharp } from '@material-ui/icons';
import Modal from "./Modal";
import {updateOrderNames} from "../../network/apis/order";
const OrderSectionPage = () => {

    const [editColumn, setEditColumn] = useState({
        flag:false
    })

    // initail value
    const initial = [{
        customerName: "",
        id: 0,
        nameProduct: "",
        quantity: 0,
        telephoneCustomer: "",
        to: "",
        totalPrice: 0
    }]

    const [all, setAll] = useState(initial);


    const [docId, setDocId] = useState([]);
    /*
    {
        docID: asgasg,
        itemID: id
    }
    */

    useEffect(() => {
        const items = [];
        const ref = db.collection('Order');
        function getAll() {
            ref.onSnapshot((snap) => {
                let doc = {}
                let temp = []

                snap.forEach((doc) => {
                    items.push(doc.data())
                    console.log(doc.data().id)
                    doc = {
                        DocID: doc.id,
                        itemID: doc.data().id
                    }
                    temp.push(doc)

                })
                setDocId(temp)
                console.log(docId)
                setAll(items)
            })
        }
        console.log("use effect")
        getAll();
    }, [])

    // col grid data
    const columns = [
        { field: 'customerName', headerName: 'Customer', width: 120 },
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nameProduct', headerName: 'Product', width: 120 },
        { field: 'quantity', headerName: 'Quantity', type: 'number', width: 130, },
        { field: 'telephoneCustomer', headerName: 'Tel Customer', width: 150, },
        { field: 'to', headerName: 'To', width: 100 },
        { field: 'totalPrice', headerName: 'Price', type: 'number', width: 100, },
        { //Button
            field: "",
            headerName: "Edit or Delete",
            sortable: false,
            width: 200,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const Delete = () => {
                    const api = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow = {};

                    fields.forEach((f) => {
                        thisRow[f] = params.getValue(f);
                    });

                    console.log(params.row.id);
                    let item = docId.find(DocRef => DocRef.itemID == params.row.id)
                    // deleteOrderNames(item);
                    console.log("Delete Function")
                    return
                };

                const update = () => {
                    const api = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow = {};

                    fields.forEach((f) => {
                        thisRow[f] = params.getValue(f);
                    });

                    console.log(params.row.id);
                    let item = docId.find(DocRef => DocRef.itemID == params.row.id)
                    console.log(item);
                    console.log("Updates Function")
                    setEditColumn({
                        flag:!editColumn.flag
                    })
                    updateOrderNames();
                    return 
                };
                return <div>
                    <Button variant="contained" color="primary" onClick={() => update()}>Edit</Button>
                    <Button variant="contained" color="primary" onClick={() => Delete()}>X</Button>
                </div>

            }
        },
    ];
    return (
        <>
            <h1>Order Section</h1>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={all} columns={columns} pageSize={5} checkboxSelection />
            </div>
            {
                editColumn.flag? <Modal/>: ''
            }
            
        </>
    )
}

export default OrderSectionPage;