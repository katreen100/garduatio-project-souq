import React, { useState } from 'react'
import { useFireStoreBrands } from '../../network/apis/brandAPI'
import { useFireStoreCategories } from '../../network/apis/categoryAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

const initialValue = {
    brandName: '',
    brandName_ar: '',
    categoryID: '',
    categoryName: '',
    categoryName_ar: '',
    createdAt: new Date(),
    updatedAt: new Date(),
}


const BrandsSectionPage = () => {
    const { Brands, addBrand, editBrand, deleteBrand } = useFireStoreBrands()
    const { Categories } = useFireStoreCategories()
    const [brand, setbrand] = useState(initialValue)
    const handleChange = ({ target }) => {
        setbrand({
            ...brand,
            [target.name]: target.value,
        })

    }
    const handleChangeSelectOption = ({ target }) => {
        setbrand({
            ...brand,
            categoryName: target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addBrand(brand)
        setbrand(initialValue)

    }




    return (
        <>
            <h1> Brand Section </h1>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input required={true} type="text" name="brandName" placeholder="Enter brand Name" onChange={handleChange} autoComplete="off" value={brand.brandName} />
                    <input required={true} type="text" name="brandName_ar" placeholder="Enter brand Name_ar " onChange={handleChange} autoComplete="off" value={brand.brandName_ar} />
                    <input required={true} type="text" name="categoryID" placeholder="Enter category ID" onChange={handleChange} autoComplete="off" value={brand.categoryID} />

                    <select value={brand.categoryName} onChange={handleChangeSelectOption}>
                        {Categories.map((category, item) => {
                            return (
                                <option
                                    value={category.categoryName}
                                    key={item} >
                                    {category.categoryName}
                                </option>

                            )
                        }
                        )}
                    </select>
                    {
                        Categories.map((category) =>{
                           return (category.categoryName === brand.categoryName) ? (brand.categoryName_ar = category.categoryName_ar) : null
                        }) 
                    }
                    {localStorage.getItem('userRole') === 'admin' ? <input type="submit" value="ADD" /> : null}
                </form>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>brandName</th>
                            <th>brandName_ar</th>
                            <th>categoryID</th>
                            <th>categoryName</th>
                            <th>categoryName_ar</th>
                            {(localStorage.getItem('userRole') === ('editor')) || (localStorage.getItem('userRole') === ('admin')) ? (<th>Edit</th>) : null}
                            {localStorage.getItem('userRole') === ('admin') ? (<th>Delete</th>) : null}
                        </tr>
                    </thead>
                    {Brands.map((brand, item) => {
                        return (
                            <tbody key={item}>
                                <BrandRow item={brand} onDelete={deleteBrand} onSaveEdits={editBrand} />
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}

export default BrandsSectionPage;


function BrandRow(props) {
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

    const updatebrandName = (ev) => {
        setData({
            ...data,
            brandName: ev.target.value
        })
    }

    const updatebrandNameArabic = (ev) => {
        setData({
            ...data,
            brandName_ar: ev.target.value
        })
    }
    const updateCategoryID = (ev) => {
        setData({
            ...data,
            categoryID: ev.target.value
        })
    }

    return (
        <tr>
            <td>{isEditMode ? <input value={data.brandName} onChange={updatebrandName} /> : data.brandName}</td>
            <td>{isEditMode ? <input value={data.brandName_ar} onChange={updatebrandNameArabic} /> : data.brandName_ar}</td>
            <td>{isEditMode ? <input value={data.categoryID} onChange={updateCategoryID} /> : data.categoryID}</td>
            <td>{data.categoryName}</td>
            <td>{data.categoryName_ar}</td>

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