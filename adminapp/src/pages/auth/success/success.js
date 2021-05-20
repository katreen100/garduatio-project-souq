import App from '../../../App'
const Sucess = ({ handleLogOut, userRole }) => {


    return <section>
        <h1> {userRole} </h1>
        <div>
            <App userRole={userRole} handleLogOut={handleLogOut}/>
        </div>



    </section>
}
export default Sucess;