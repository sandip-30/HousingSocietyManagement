import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import AccountantDashboard from './Components/Finance/AccoutantDashboard';
import OwnerDashboard from './Components/Owner/OwnerDashboard';
import AddMonthDetails from './Components/Finance/AddMonthDetails';
import AddMonthTrial from './Components/Finance/AddMonthTrail';
import React, { useState, useEffect } from "react";
import axios, { Axios } from 'axios';
import MonthDueDateForm from './Components/Finance/MonthDueDateForm';

function App() {

  const [userRegData, setUserRegData] = useState('')
  const [loading, setloading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  // fetch registration Data

  function fetchUsers() {

    setloading(true)
    axios.get('https://society-management-syste-4b7b1-default-rtdb.asia-southeast1.firebasedatabase.app/flatsRegistration.json')
      .then((response) => {
        return response.data
      })
      .then((data) => {
        const usersData = [];
        for (const key in data) {
          usersData.push({ ...data[key], id: key })
        }
        console.log(usersData)
        setUserRegData(usersData)
        setloading(false)
      })
  }





  return (
    <div className="App">
      <MonthDueDateForm></MonthDueDateForm>
     {/* { !loading && <AddMonthTrial userRegData = {userRegData}></AddMonthTrial>} */}
      {/* <AddMonthDetails></AddMonthDetails> */}
      {/* <AccountantDashboard></AccountantDashboard> */}

      {/* <OwnerDashboard></OwnerDashboard> */}

      <Registration></Registration>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
