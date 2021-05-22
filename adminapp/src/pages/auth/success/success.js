
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminsSectionPage from '../../dashboard/admins';
import BrandSectionPage from '../../dashboard/brand';
import CategorySectionPage from '../../dashboard/category';
import CustomerSectionPage from '../../dashboard/customer';
import DashboardPage from '../../dashboard/dashboard'
import HomeSectionPage from '../../dashboard/home';
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
                    <Route path='/Categories' component={CategorySectionPage} />
                    <Route path='/Admins' component={AdminsSectionPage} />
                    <Route path='/Brands' component={() => <BrandSectionPage />} />
                </Switch>

            </Router>


        </>
    );
}
export default Sucess;