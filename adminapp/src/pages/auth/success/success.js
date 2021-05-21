// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import AdminsSectionPage from '../../dashboard/admins';
// import BrandSectionPage from '../../dashboard/brand';
// import CategorySectionPage from '../../dashboard/category';
// import CustomerSectionPage from '../../dashboard/customer';
import DashboardPage from '../../dashboard/dashboard'
import OrderSectionPage from '../../dashboard/order';
import ProductSectionPage from '../../dashboard/product';

const Sucess = ({ handleLogOut, userRole }) => {


    return (
        <>

                <DashboardPage userRole={userRole} handleLogOut={handleLogOut} />

            

        </>
    );
}
export default Sucess;