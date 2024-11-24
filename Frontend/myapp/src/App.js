import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom"
import Login from './pages/Login';
import { useNavigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import Navbar from './pages/Navbar';
import UpdateEmployeedata from './pages/UpdateEmployeedata';

function App() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.admin)
  // console.log("The User is ", user)
  return (
    <div className="App bg-black w-screen h-screen text-white">
      <Navbar/>
      <Routes>
        <Route
          path='/login'
          element={<Login />} />
        
        <Route
          path='/dashboard/employeeList'
          element={<EmployeeList/>}
        />

        <Route
          path='/dashboard'
          element={<Dashboard />}/>

        <Route
        path='/dashbord/employeeList/createEmployee'
        element={<CreateEmployee/>} />

        <Route
        path='/dashbord/employeeList/updateEmployee'
        element={<UpdateEmployeedata/>}/>
      </Routes>
    </div>
  );
}

export default App;
