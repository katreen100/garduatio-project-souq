import React, { useState } from 'react'
import { useFireStoreBrands } from '../../network/apis/brandAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

const initialValue = { brandID: "", brandName: "", brandQuantity: "", categoryID: "", createdAt: "", id: "" }
const BrandSectionPage = () => {
    const { brands } = useFireStoreBrands()
    const { addBrand } = useFireStoreBrands()
    const { deleteBrand } = useFireStoreBrands()
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
                            <tbody key={brand.id}>
                                <tr>
                                    <td>{brand.brandName}</td>
                                    <td>{brand.brandID}</td>
                                    <td>{brand.brandQuantity}</td>
                                    <td>{brand.categoryID}</td>
                                    <td> <Button onClick={() => deleteBrand(brand.id)}> delete </Button> </td>
                                    {/* {2 === 3 ?  <td> <Button onClick={() => deleteBrand(brand.id)}> delete </Button> </td>: ''} */}
                                    
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}


export default BrandSectionPage;
