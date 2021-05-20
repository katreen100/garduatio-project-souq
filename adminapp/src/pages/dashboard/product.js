import { useState, useEffect } from 'react';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
// import { deleteOrderNames } from '../../network/apis/order';
import { db } from '../../network/firebase/firebaseConfig';
// import { PanoramaVerticalSharp } from '@material-ui/icons';

const ProductSectionPage = ({userRole, handleLogOut}) => {

    
    


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

    const getAll = ()=>{
        const items = [];
        const ref = db.collection('products');

        ref.onSnapshot((snap) => {
            // let doc = {}
            let temp = []

            snap.forEach((doc) => {
                items.push(doc.data())
                console.log(doc.data().id)
                temp.push(doc)

            })
            setAll(items)
        })
   }


    useEffect(() => {
        console.log("use effect")
        getAll();
    }, []);
   
    // col grid data
    const columns = [
        { field: 'title', headerName: 'product title', width: 120 },
        { field: 'quantity', headerName: 'quantity', width: 70 },
        { field: 'shipping', headerName: 'shipping', width: 120 },
        { field: 'id', headerName: 'id', type: 'string', width: 130, },
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
                    console.log("Updates Function")

                    return
                };
                if (userRole === 'editor') {
                    return <div>
                        <Button variant="contained" color="primary" onClick={() => update()}>Edit</Button>

                    </div>
                }
                else if (userRole === 'viewer') {
                    return <div>
                        

                    </div>
                }
                else {
                    return <div>
                        <Button variant="contained" color="primary" onClick={() => update()}>Edit</Button>
                        <Button variant="contained" color="primary" onClick={() => Delete()}>X</Button>
                    </div>
                }


            }
        },
    ];
    return (
        <>
            <h1>products Section</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={all} columns={columns} pageSize={5} checkboxSelection />
            </div>


        </>
    )
}

export default ProductSectionPage;