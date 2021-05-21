import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import CustomerSectionPage from './pages/dashboard/customer'
// import ProductSectionPage from './pages/dashboard/product'
// import OrderSectionPage from './pages/dashboard/order'
// import CategorySectionPage from './pages/dashboard/category'
// import AdminsSectionPage from './pages/dashboard/admins'
// import BrandSectionPage from './pages/dashboard/brand'
import LoginPage from './pages/auth/index'
// import DashboardPage from './pages/dashboard/dashboard';
function App() {

  return (
    <div className="App">
      <LoginPage />
      {/* <Router>
        <Switch>
        <Route path='/' component={LoginPage} />
           <Route path='/Customers' component={CustomerSectionPage} />
          <Route path='/Products' component={ProductSectionPage} />
          <Route path='/Orders' component={OrderSectionPage} />
          <Route path='/Categories' component={CategorySectionPage} />
          <Route path='/Admins' component={AdminsSectionPage} />
          <Route path='/Brands' component={BrandSectionPage} /> 
         </Switch>

      </Router> */}

    </div>
  );
}

export default App;