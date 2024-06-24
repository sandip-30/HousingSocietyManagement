import React from 'react';

function OwnerDashboard() {
    return (
        <>
            <h2>Owner Dashboard</h2>

            <div className='col-sm-8 mx-auto'>

                <table class="table table-bordered">

                    <tbody>
                        <tr>
                            <th scope="row">Flat No</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>XYZ</td>
                        </tr>
                        <tr>
                            <th scope="row">Date of Possession</th>
                            <td>00/00/2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='col-sm-10 mx-auto'>
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Month</th>
                            <th scope="col">Maintenance Amount</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Payment Date</th>
                            <th scope="col">Paid Amount</th>
                            <th scope="col">Late Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">July-2024</th>
                            <th>1000</th>
                            <td>15/07/2024</td>
                            <td>30/07/2024</td>
                            <td>1000</td>
                            <td>0</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">August-2024</th>
                            <th>1000</th>
                            <td>15/08/2024</td>
                            <td>30/07/2024</td>
                            <td>1000</td>
                            <td>0</td>
                        </tr>
                        <tr>Total</tr>
                    </tbody>
                </table>



            </div>


        </>
    )
}

export default OwnerDashboard;