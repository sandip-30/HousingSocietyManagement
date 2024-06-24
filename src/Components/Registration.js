import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        flatNumber: '',
        ownerName: '',
        possessionDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //   const handleSubmit =  (e) => {
    //     e.preventDefault();
    //     console.log(formData)
    //   };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://society-management-syste-4b7b1-default-rtdb.asia-southeast1.firebasedatabase.app/database.json', formData)
            // alert('Registration successful!');
            console.log(formData);

        } catch (error) {
            alert('Registration failed. Please try again.');
        }

        
    };

    return (
        <>
        <h2>Registration Components</h2>
          <div className='col-md-6 mx-auto'>
                <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="username" name="username" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="password" name="password" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="flatNumber" className="col-sm-2 col-form-label">Flat Number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="flatNumber" name="flatNumber" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="ownerName" className="col-sm-2 col-form-label">Owner Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="ownerName" name="ownerName" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="possessionDate" className="col-sm-2 col-form-label">Possession Date</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="possessionDate" name="possessionDate" onChange={handleChange} />
                            </div>
                        </div>

                        
                        {/* <input type="password" name="password" onChange={handleChange} />
                        <input type="text" name="flatNumber" onChange={handleChange} />
                        <input type="text" name="ownerName" onChange={handleChange} />
                        <input type="date" name="possessionDate" onChange={handleChange} /> */}
                        
                        <button type="submit" className='btn btn-success'>Register</button>
                </form>
          </div>
        </>
    );
};

export default Registration;
