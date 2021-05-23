import React, { useState } from 'react'
import { useFireStoreAdmins } from '../../network/apis/adminAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'

const initialValue = {
    createdAt: new Date(),
    email: "",
    name: "",
    profilePicture: "",
    updatedAt: new Date(),
    userRole: ""
}

const AdminsSectionPage = () => {
    const { Admins, addAdmin, editAdmin, deleteAdmin } = useFireStoreAdmins()
    const [admin, setAdmin] = useState(initialValue)
    const handleChange = ({ target }) => {
        setAdmin({
            ...admin,
            [target.name]: target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addAdmin(admin)
        setAdmin(initialValue)
    }
    return (
        <>
            <h1> Admin Section </h1>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input required={true} type="text" name="email" placeholder="Enter Email Address" onChange={handleChange} autoComplete="off" value={admin.email} />
                    <input required={true} type="text" name="name" placeholder="Enter Name" onChange={handleChange} autoComplete="off" value={admin.name} />
                    <input required={true} type="text" name="profilePicture" placeholder="Enter String Link" onChange={handleChange} autoComplete="off" value={admin.profilePicture} />
                    <select required={true} name="userRole" onChange={handleChange} value={admin.userRole}>
                        <option value="DEFAULT" disabled>Choose Role</option>
                        <option value="admin" > Admin </option>
                        <option value="editor" > Editor </option>
                        <option value="viewer" > Viewer </option>
                    </select>
                    {localStorage.getItem('userRole') === 'admin' ? <input type="submit" value="ADD" /> : null}
                </form>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Profile Picture FireStore Storage Link</th>
                            <th>UserRole</th>
                            {(localStorage.getItem('userRole') === ('editor')) || (localStorage.getItem('userRole') === ('admin')) ? (<th>Edit</th>) : null}
                            {localStorage.getItem('userRole') === ('admin') ? (<th>Delete</th>) : null}
                        </tr>
                    </thead>
                    {Admins.map((admin, item) => {
                        return (
                            <tbody key={item}>
                                <AdminRow item={admin} onDelete={deleteAdmin} onSaveEdits={editAdmin} />
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        </>
    )
}

export default AdminsSectionPage;


function AdminRow(props) {
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
    const updateAdminName = (ev) => {
        setData({
            ...data,
            name: ev.target.value
        })
    }
    const updateProfilePicture = (ev) => {
        setData({
            ...data,
            profilePicture: ev.target.value
        })
    }
    const updateUserRole = (ev) => {
        setData({
            ...data,
            userRole: ev.target.value
        })
    }
    return (
        <tr>
            <td>{data.email}</td>
            <td>{isEditMode ? <input value={data.name} onChange={updateAdminName} /> : data.name}</td>
            <td>{isEditMode ? <input value={data.profilePicture} onChange={updateProfilePicture} /> : <img src={data.profilePicture} onChange={updateProfilePicture} alt='img admin' width='100' />}</td>
            <td>{isEditMode ? <select name="userRole" onChange={updateUserRole} value={data.userRole}>
                <option value="admin" > Admin </option>
                <option value="editor" > Editor </option>
                <option value="viewer" > Viewer </option>
            </select> : data.userRole}</td>
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