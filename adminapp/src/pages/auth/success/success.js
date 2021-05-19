import OrderSectionPage from '../../dashboard/order'
const Sucess = ({ handleLogOut, userRole }) => {


    return <section>
        <div style={{ height: 100 }}> </div>
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
        <div style={{ height: 100 }}> </div>
        <div>
            <h3> {userRole} </h3>
            <OrderSectionPage userRole={userRole} />

        </div>



    </section>
}
export default Sucess;