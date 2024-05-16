import logo from './logo.svg';
import './App.css';
import LeftNavBar from './components/LeftNavBar/LeftNavbar';
import Header from './components/Header/Header';
import Dashboard from './screens/Dashboard/Dashboard';
import Invoices from './screens/Invoices/Invoices';
import { Router } from './Route/Routers';

function App() {
  return (
    <div className="App">
      <LeftNavBar/>
      <Header/>
      {/* <Dashboard/> */}
{/* <Invoices/> */}
<Router/>
    </div>
  );
}

export default App;
