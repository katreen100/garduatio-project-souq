import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPage from './pages/dashboard/dashboard';
import db from './network/firebase/firebaseConfig';
import './App.css';


function App() {
  db.collection('brands')
          .get()
          .then(response => {
            return response.docs.map(doc => {
              console.log(doc.data());
              return doc.data();
            })
          })
          .catch(error => console.log(error))
  return (
    <div className="App">
      <DashboardPage />
    </div>
  );
}

export default App;