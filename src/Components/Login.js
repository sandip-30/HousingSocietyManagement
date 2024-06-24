import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([])
    //   const history = useNavigate();
    //   const history = useHistory();

    function fertchUsers() {
        axios.get('https://society-management-syste-4b7b1-default-rtdb.asia-southeast1.firebasedatabase.app/database.json')
        .then((response)=>{ 
            return response.data}
        )
        .then((data)=>{
            let userData = [];
            for (const key in data) {
               userData.push({...data[key], id : key});
               setUsers(userData)
            }
        }
        )
      }

    fertchUsers();

      console.log(users);

      const user = users.find(user => user.username === username && user.password === password);



    const handleSubmit = async (e) => {
        e.preventDefault();

        
    if (user) {
        alert('Login successful!');
        // Redirect to the appropriate component based on user role
      } else {
        alert('Invalid username or password');
      }

     
  


    

        // try {
        //   const response = await axios.post('https://society-management-syste-4b7b1-default-rtdb.asia-southeast1.firebasedatabase.app/login.json', { username, password });
        //   const { role } = response.data;
        //   console.log(role)
        //   if (role === 'Accountant') {
        //     history('/accountant');
        //   } else if (role === 'Owner') {
        //     history('/owner');
        //   } else if (role === 'Admin') {
        //     history('/Registration');
        //   }
        // } catch (error) {
        //   alert('Login failed. Please try again.');
        // }
    };

    return (
        <>
            <div className='col-md-6 mx-auto'>
                <h2>Login Components</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {/* <button type="button" onClick={() => history.push('/forgot-password')}>Forgot Password</button> */}
                    </div>
                    <button type="submit" className="btn btn-primary m-2">Login</button>
                    <button type="button" className="btn btn-info m-2">Forgot Password</button>
                </form>
            </div>
        </>
    );
};

export default Login;
