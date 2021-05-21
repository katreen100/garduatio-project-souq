import React, { useState } from 'react'
import { useFireStoreBrands } from '../../network/apis/brandAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

const initialValue = { brandID: "", brandName: "", brandQuantity: "", categoryID: "", createdAt: "", id: "" }
const BrandSectionPage = () => {
    const { brands, addBrand, deleteBrand, editBrand } = useFireStoreBrands()
    const [brand, setBrand] = useState(initialValue)
    const handleChange = ({ target }) => {
        setBrand({
            ...brand,
            [target.name]: target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addBrand(brand)
        setBrand(initialValue)
    }
    return (
        <>
            <h1> Brand Section </h1>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="brandID" placeholder="Enter Brand ID" onChange={handleChange} autoComplete="off" value={brand.brandID} />
                    <input type="text" name="brandName" placeholder="Enter brand Name" onChange={handleChange} autoComplete="off" value={brand.brandName} />
                    <input type="text" name="brandQuantity" placeholder="Enter brand Quantity" onChange={handleChange} autoComplete="off" value={brand.brandQuantity} />
                    <input type="text" name="categoryID" placeholder="Enter category ID" onChange={handleChange} autoComplete="off" value={brand.categoryID} />
                    <input type="date" name="createdAt" placeholder="Date" onChange={handleChange} autoComplete="off" value={brand.createdAt} />
                    {/* {2 === 3 ? <input type="submit" value="ADD" /> : ''} */}
                    <input type="submit" value="ADD" /> 
                </form>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Brand Name</th>
                            <th>Brand ID</th>
                            <th>Brand Quantity</th>
                            <th>Brand category ID</th>
                            {/* {2 === 3 ? <th>Delete</th> : ''} */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {brands.map(brand => {
                        return (
                            <tbody>
                                <BrandRow item={brand} onDelete={deleteBrand} onSaveEdits={editBrand} />
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}


export default BrandSectionPage;


function BrandRow(props) {
    const [isEditMode, setIsEditMode] = React.useState()

    const [data, setData] = React.useState(props.item)

    const toggleEditMode = () => setIsEditMode(!isEditMode)

    const saveEditedData = () => {
        props.onSaveEdits(data)
        toggleEditMode()
    }

    const updateNameValue = (ev) => {
        setData({
            ...data,
            brandName: ev.target.value
        })
    }

    const updateQuantityValue = (ev) => {
        setData({
            ...data,
            brandQuantity: ev.target.value
        })
    }

    return (
        <tr>
            <td>{isEditMode ? <input value={data.brandName} onChange={updateNameValue} /> : data.brandName}</td>
            <td>{data.brandID}</td>
            <td>{isEditMode ? <input value={data.brandQuantity} onChange={updateQuantityValue} /> : data.brandQuantity}</td>
            <td>{data.categoryID}</td>
            <td> <Button onClick={() => props.onDelete(data.id)}> Delete </Button> </td>
            <td>
                {
                    isEditMode
                        ?   <Button onClick={saveEditedData}> Save </Button>
                        :   <Button onClick={toggleEditMode}> Edit </Button>
                }
            </td>            
        </tr>
    )
}
