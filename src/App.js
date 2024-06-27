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

function App() {

  const [userRegData, setUserRegData] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  // fetch registration Data

  function fetchUsers() {
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
      })
  }





  return (
    <div className="App">
      <AddMonthTrial userRegData = {userRegData}></AddMonthTrial>
      {/* <AddMonthDetails></AddMonthDetails> */}
      {/* <AccountantDashboard></AccountantDashboard> */}

      {/* <OwnerDashboard></OwnerDashboard> */}

      <Registration></Registration>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
