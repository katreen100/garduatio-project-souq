import DashboardPage from '../../dashboard/dashboard'
const Sucess = ({ handleLogOut, userRole }) => {


    return <section>
        <div>
            <DashboardPage userRole={userRole} handleLogOut={handleLogOut} />
        </div>



    </section>
}
export default Sucess;