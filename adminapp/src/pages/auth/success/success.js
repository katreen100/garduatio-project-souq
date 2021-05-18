import React from 'react';

const Sucess = ({ handleLogOut }) => {
    const handlAdmin=()=>{
        console.log("Create and Delete and Update and Read");
    }
    const handleEditor =()=>{
        console.log("Read and Update");
    }
    const handleSubscriber = ()=>{
        console.log("read");
    }
    
    return <section>
        <div style={{ height: 100 }}> </div>
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
        <div style={{ height: 100 }}> </div>
        <div>
            <button onClick={handlAdmin}>Admin</button>
            <button onClick={handleSubscriber}>Subscriber</button>
            <button onClick={handleEditor}>Editor</button>
        </div>
        
    </section>
}
export default Sucess;