import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddMonthTrial = (props) => {

    // Get Registration Details
   const users = props.userRegData
   console.log(users.length)



  // Initialize state with 100 row
  const [myrows , setmyrows]= useState(users)
  const [rows, setRows] = useState(

    Array.from({ length: users.length }, () => ({
      flatNo: '',
      ownerName: '',
      isRented: false,
      month: '',
      dueDate:'b'
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
            {myrows.map((row, index) => (
              <tr key={index}>
                <td>
                  {/* <input
                    type="text"
                    value={row.flatNumber}
                    onChange={(e) => handleChange(index, 'flatNo', e.target.value)}
                    className="form-control"
                  /> */}
                  <h4 onChange={(e) => handleChange(index, 'flatNo', console.log(e))} >{row.flatNumber}</h4>
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
                    type="date"

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

// const AddMonthTrial = (props) => {

//   Sample userData array
// const initialUserData = [
//   { flatNumber: '101', flatName: 'John' },
//   { flatNumber: '102', flatName: 'Doe' },
//   Add more as needed
// ];



//   Get Registration Details
//   const users = props.userRegData
//   console.log(users)


//   const [userData, setUserData] = useState(users);



//   const handleInputChange = (index, field, value) => {
//     const newUserData = [...userData];
//     newUserData[index][field] = value;
//     setUserData(newUserData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Updated User Data:', userData);
//     Here you can do further processing, like sending the data to an API
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Flat Number</th>
//               <th>Flat Name</th>
//               <th>Months</th>
//               <th>Due Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userData.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.flatNumber}</td>
//                 <td>{user.ownerName}</td>
//                 <td>
//                   <input
//                     type="month"
//                     value={user.months || ''}
//                     onChange={(e) =>
//                       handleInputChange(index, 'months', e.target.value)
//                     }
//                   />

//                 </td>
//                 <td>
//                   <input
//                     type="date"
//                     value={user.dueDate || ''}
//                     onChange={(e) =>
//                       handleInputChange(index, 'dueDate', e.target.value)
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };


export default AddMonthTrial;
