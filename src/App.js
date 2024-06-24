import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import AccountantDashboard from './Components/Finance/AccoutantDashboard';
import OwnerDashboard from './Components/Owner/OwnerDashboard';

function App() {

  




  return (
    <div className="App">
      <AccountantDashboard></AccountantDashboard>
    
      <OwnerDashboard></OwnerDashboard>

        {/* <Registration></Registration>
        <Login></Login> */}
    </div>
  );
}

export default App;
