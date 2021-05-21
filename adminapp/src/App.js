import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './pages/auth/index';


function App({userRole, handleLogOut}) {

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;