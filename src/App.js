import 'antd/dist/antd.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Admin/Admin';
import Mentor from './Components/Mentor/Mentor';
import EmployeeReg from './Components/Employee.js/EmployeeReg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login />} />
      <Route path='/Admin/*' element={<Admin />} />
      <Route path='/Register/*' element={<Admin />} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
