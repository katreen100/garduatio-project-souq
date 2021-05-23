import React, { useState } from 'react'
import { useFireStoreCategories } from '../../network/apis/categoryAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

const initialValue = {
    categoryName: '',
    categoryName_ar: '',
    createdAt: new Date(),
    updatedAt: new Date(),
}

const CategorySectionPage = () => {
    const { Categories, addCategory, editCategory, deleteCategory } = useFireStoreCategories()
    const [category, setCategory] = useState(initialValue)
    const handleChange = ({ target }) => {
        setCategory({
            ...category,
            [target.name]: target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addCategory(category)
        setCategory(initialValue)
    }
    return (
        <>
            <h1> Category Section </h1>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input required={true} type="text" name="categoryName" placeholder="Enter Category Name" onChange={handleChange} autoComplete="off" value={category.categoryName} />
                    <input required={true} type="text" name="categoryName_ar" placeholder="Enter Category Name Arabic" onChange={handleChange} autoComplete="off" value={category.categoryName_ar} />

                    {localStorage.getItem('userRole') === 'admin' ? <input type="submit" value="ADD" /> : null}
                </form>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>category Name English</th>
                            <th>category Name Arabic</th>
                            {(localStorage.getItem('userRole') === ('editor')) || (localStorage.getItem('userRole') === ('admin')) ? (<th>Edit</th>) : null}
                            {localStorage.getItem('userRole') === ('admin') ? (<th>Delete</th>) : null}
                        </tr>
                    </thead>
                    {Categories.map((category, item) => {
                        return (
                            <tbody key={item}>
                                <CategoryRow item={category} onDelete={deleteCategory} onSaveEdits={editCategory} />
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}

export default CategorySectionPage;


function CategoryRow(props) {
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
    // const updateBrandEnglish = (ev) => {
    //     setData({
    //         ...data,
    //         brands : [{
    //             name : ev.target.value,
    //         }]
    //     })
    // }
    // const updateBrandArabic = (ev) => {
    //     setData({
    //         ...data,
    //         brands : [{
    //             name_ar : ev.target.value
    //         }]
    //     })
    // }
    const updateCategoryEnglish = (ev) => {
        setData({
            ...data,
            categoryName: ev.target.value
        })
    }
    const updateCategoryArabic = (ev) => {
        setData({
            ...data,
            categoryName_ar: ev.target.value
        })
    }
    return (
        <tr>
            <td>{isEditMode ? <input value={data.categoryName} onChange={updateCategoryEnglish} /> : data.categoryName}</td>
            <td>{isEditMode ? <input value={data.categoryName_ar} onChange={updateCategoryArabic} /> : data.categoryName_ar}</td>

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

