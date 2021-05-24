import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminsSectionPage from '../../dashboard/admins';
import BrandsSectionPage from '../../dashboard/brand';
import CategorySectionPage from '../../dashboard/category';
import CustomerSectionPage from '../../dashboard/customer';
import DashboardPage from '../../dashboard/dashboard'
import HomeSectionPage from '../../dashboard/home';
import SimpleModal from '../../dashboard/Modal';
import OrderSectionPage from '../../dashboard/order';
import ProductSectionPage from '../../dashboard/product';

const Sucess = ({ handleLogOut }) => {


    return (
        <>

            <Router>
                <DashboardPage handleLogOut={handleLogOut} />
                <Switch>
                    <Route path='/' exact component={HomeSectionPage} />
                    <Route path='/Customers' component={CustomerSectionPage} />
                    <Route path='/Products' component={ProductSectionPage} />
                    <Route path='/Orders' component={OrderSectionPage} />
                    <Route path='/Brands' component={BrandsSectionPage} />
                    <Route path='/Categories' component={CategorySectionPage} />
                    <Route path='/Admins' component={AdminsSectionPage} />
                    <Route path='/CreateProduct' component={SimpleModal} />
                    <Route path='/*' exact component={HomeSectionPage} />
                </Switch>

            </Router>


        </>
    );
}
export default Sucess;