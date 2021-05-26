import React, { useState } from 'react'
import { useFireStoreProducts } from '../../network/apis/productAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const initialValue = {
    allVariations: {},
    allVariations_ar: {},
    sellerNotes: {},
    sellerNotes_ar: {},
    variants: {},
    features: {},
    features_ar: {},

    brandName: '',
    brandName_ar: '',
    categoryName: '',
    categoryName_ar: '',

    description: '',
    description_ar: '',
    averageRating: '',
    discount: '',
    eligibleForCoupons: false,
    freeShipping: true,
    mainImage: '',
    shipping_ar: '',
    tax: '',

    name: '',
    name_ar: '',
    price: '',
    condition: '',
    condition_ar: '',
    mainVariant: 'mainVariant',

    createdAt: new Date(),
    updatedAt: new Date(),
}


const ProductSectionPage = () => {
    const { Products, addProduct, editProduct, deleteProduct } = useFireStoreProducts()
    const [product, setProduct] = useState(initialValue)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addProduct(product)
        setProduct(initialValue)
    }

    return (
        <>
            <h1> Product Section </h1>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    {localStorage.getItem('userRole') === 'admin' ? 
                    <Link to="/CreateProduct" className="btn btn-primary">ADD</Link> : null}
                </form>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category Name</th>
                            <th>Brand Name</th>
                            <th>Details</th>
                            
                            {(localStorage.getItem('userRole') === ('editor')) || (localStorage.getItem('userRole') === ('admin')) ? (<th>Edit</th>) : null}
                            {localStorage.getItem('userRole') === ('admin') ? (<th>Delete</th>) : null}
                        </tr>
                    </thead>
                    {Products.map((product, item) => {
                        return (
                            <tbody key={item}>
                                <ProductRow item={product} onDelete={deleteProduct} onSaveEdits={editProduct} />
                            </tbody>

                        )
                    })}
                </Table>
            </div>
        </>
    )
}
function ProductRow(props) {

    const [isEditMode, setIsEditMode] = React.useState()
    const [data, setData] = React.useState(props.item)
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
        data.updatedAt = new Date()
    }
    const saveEditedData = () => {
        props.onSaveEdits(data)
        toggleEditMode()
    }

    return (


        <tr>
            <td>{data.name}</td>
            <td>{data.categoryName}</td>
            <td>{data.brandName}</td>
            <td>{data.description}</td>
            {/* <td>
                {Object.entries(data.allVariations).map(([key, value]) => <p key={key}>{key} : {value.join(' , ')}</p>)}
            </td> */}
            {(localStorage.getItem('userRole') === ('editor')) || localStorage.getItem('userRole') === ('admin') ? (
                <td>
                    {
                        isEditMode
                            ? <Button onClick={saveEditedData}> Save </Button>
                            : <Button onClick={toggleEditMode}> Edit </Button>
                    }
                </td>
            ) : null}
            {localStorage.getItem('userRole') === ('admin') ? (
                <td> <Button onClick={() => props.onDelete(data.id)}> Delete </Button> </td>
            ) : null}
        </tr>
    )
}

export default ProductSectionPage;