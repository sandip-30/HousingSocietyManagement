import React, {useRef, useState} from "react";
import axios from 'axios';



function AccountantDashboard() {

    const [flatNumber, setFlatNumber]= useState('')
    const flateNumberRef = useRef(); 
    const flateOwnerrRef = useRef(); 
    const paymentDateRef = useRef(); 
    const paidAmountRef = useRef(); 
  

function showFlatNoHandler(){
    console.log(flateNumberRef.current.innerText)
    console.log(flateOwnerrRef.current.innerText)
    
    const paymentDate = new Date(paymentDateRef.current.value)
    const paymentMonth =paymentDate.getMonth();
    const paymentYear =paymentDate.getFullYear();
    const  obj = {};
    console.log(paymentYear);

    const paymentsDetails = {
        [2024] : {
            [paymentMonth] : {
        flatNumber : flateNumberRef.current.innerText, 
        flatOwner :flateOwnerrRef.current.innerText,
        paymentDate :paymentDateRef.current.value,
        paidAmount :paidAmountRef.current.value,
        paymentMonth : paymentMonth
    }
    }
    }

    console.log(paymentsDetails)

    
    try {
        const response =  axios.post('https://society-management-syste-4b7b1-default-rtdb.asia-southeast1.firebasedatabase.app/paymentDetails.json', paymentsDetails)
        // alert('Registration successful!');
        console.log(paymentsDetails);

    } catch (error) {
        alert('PaymentDetails Updation failed. Please try again.');
    }

    // console.log(
    //     {flatNumber : flateNumberRef.current.innerText, 
    //     flatOwner :flateOwnerrRef.current.innerText,
    //     paymentDate :paymentDateRef.current.value,
    //     paidAmount :paidAmountRef.current.value,
    // })
    
}

    return (
        <>
            <h2>Accountant Dashboard</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Flat No</th>
                        <th scope="col">Owner Name</th>
                        <th scope="col">Dues</th>
                        <th scope="col">Payment Date</th>
                        <th scope="col">Paid Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" ref={flateNumberRef}>1</th>
                        <td ref={flateOwnerrRef}>XYZ</td>
                        <td>1000</td>
                        <td><input type="date" ref={paymentDateRef} id="start" name="trip-start"  min="2024-07-01" max="2025-12-31" onChange={(e)=>{console.log('Date:',e.target.value )}} /></td>
                        <td><input type="text" ref={paidAmountRef} placeholder="Enter Paid Amount"   onChange={(e)=>{console.log(e.target.value)}}/></td>
                    </tr>
                </tbody>

            </table>

            <div className="float-right mx-4">
                <button className="btn btn-primary" type="submit" onClick={showFlatNoHandler}>Submit form</button>
            </div>
        </>
    )
}

export default AccountantDashboard;
