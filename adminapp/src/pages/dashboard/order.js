import { getAllOrderNames } from '../../network/apis/order';
import { useState } from 'react';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";


const OrderSectionPage = () => {

    const columns = [
        { field: 'customerName', headerName: 'Name', width: 130 },
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'nameProduct', headerName: 'Name Product', width: 130 },
        {
            field: 'quantity',
            headerName: 'quantity',
            type: 'number',
            width: 130,
        },
        {
            field: 'telephoneCustomer',
            headerName: 'telephoneCustomer',

            width: 130,
        },

        {
            field: 'to',
            headerName: 'to',

            width: 130,
        },
        {
            field: 'totalPrice',
            headerName: 'Total Price',
            type: 'number',
            width: 130,
        },
        {
            field: "",
            headerName: "Button",
            sortable: false,
            width: 117,
            disableClickEventBubbling: true,
            renderCell: (params) => {
              const onClick = () => {
                const api = params.api;
                const fields = api
                  .getAllColumns()
                  .map((c) => c.field)
                  .filter((c) => c !== "__check__" && !!c);
                const thisRow = {};
        
                fields.forEach((f) => {
                  thisRow[f] = params.getValue(f);
                });
        
                return alert(JSON.stringify(thisRow, null, 4));
              };
        
              return <Button onClick={onClick}>Click</Button>;
            }
          },




    ];


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


    console.log(getAllOrderNames()
        .then(res => { console.log(res.map(id => { console.log(id.id) })) }));
    getAllOrderNames().then(res => {
        console.log(res);
        setAll(

            res.map(AllData => {
                console.log(AllData.id);

                return AllData;
            })
        )
    }).then(res => { console.log(all) })
    return (
        <>
            <h1>Order Section</h1>
            <div>

                {/* <h1>{all[0].customerName}</h1>
                <h1>{all[0].id}</h1>

                <h1>{all[0].nameProduct}</h1>
                <h1>{all[0].quantity}</h1>
                <h1>{all[0].telephoneCustomer}</h1>
                <h1>{all[0].to}</h1>
                <h1>{all[0].totalPrice}</h1> */}



                {/* {getAllOrderNames().then(res => {
                    res.map(AllData => {
                        return <h1> {AllData} </h1>
                    })
                })} */}

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={all} columns={columns} pageSize={5} checkboxSelection />
                </div>

            </div>

        </>
    )
}

export default OrderSectionPage;