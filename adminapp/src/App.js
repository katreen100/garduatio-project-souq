import 'bootstrap/dist/css/bootstrap.min.css';
//import DashboardPage from './pages/dashboard/dashboard';
import OrderSectionPage from './pages/dashboard/order';
import './App.css';


function App({userRole, handleLogOut}) {

  return (
    <div className="App">
      {/* <DashboardPage userRole={userRole} handleLogOut={handleLogOut}/> */}
      <OrderSectionPage userRole={userRole} handleLogOut={handleLogOut}/>
    </div>
  );
}

export default App;