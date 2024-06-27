import React, { useState,useEffect } from 'react';
import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddMonthTrial = (props) => {

    // Get Registration Details
   const users = props.userRegData
   console.log(users.length)


    
  // Initialize state with 100 rows
  const [rows, setRows] = useState(
   
    Array.from({ length: users.length }, () => ({
      flatNo: '',
      ownerName: '',
      isRented: false,
      month: '',
      dueDate:''
    }))
  );

 

  // Handle input change
  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Data:', rows);
    // Process the data as needed
  };

  return (
    <div className="container mt-5">
      <h1>Housing Society Management</h1>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Flat No</th>
              <th>Owner Name</th>
              <th>Is Rented</th>
              <th>Month</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={row.flatNo}
                    onChange={(e) => handleChange(index, 'flatNo', e.target.value)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.ownerName}
                    onChange={(e) => handleChange(index, 'ownerName', e.target.value)}
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    value={row.isRented}
                    onChange={(e) => handleChange(index, 'isRented', e.target.value === 'true')}
                    className="form-control"
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </td>
                <td>
                  <input
                    type="month"
                    
                    onChange={(e) => handleChange(index, 'month', e.target.value)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="month"
                    
                    onChange={(e) => handleChange(index, 'month', e.target.value)}
                    className="form-control"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddMonthTrial;
