import React from "react";

function AddMonthDetails() {

    return (
        <>
            <h2>Add Month Details Dashboard</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Flat No</th>
                        <th scope="col">Owner Name</th>
                        <th scope="col">isRented</th>
                        <th scope="col">Year</th>
                        <th scope="col">Month</th>
                        <th scope="col">DueDate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>101</th>
                        {/* <th scope="row" ref={flateNumberRef}>1</th> */}
                        <td>XYZ</td>
                        <td>  <select class="form-control">
                            <option>Yes</option>
                            <option>No</option>
                        </select></td>
                        <td> <select class="form-control">
                            <option>2024</option>
                            <option>2025</option>
                        </select></td>
                        <td>  <input type="month" id="myMonth" /></td>
                        
                    </tr>
                    <tr>
                        <th>102</th>
                        {/* <th scope="row" ref={flateNumberRef}>1</th> */}
                        <td>ABC</td>
                        <td>  <select class="form-control">
                            <option>Yes</option>
                            <option>No</option>
                        </select></td>
                        <td> <select class="form-control">
                            <option>2024</option>
                            <option>2025</option>
                        </select></td>
                        <td>  <input type="month" id="myMonth" /></td>
                        
                    </tr>
                    <td><button className="btn btn-primary" type="submit">Save</button></td>
                </tbody>

            </table>

            {/* <div className="float-right mx-4">
            <button className="btn btn-primary" type="submit" onClick={showFlatNoHandler}>Submit form</button>
        </div> */}
        </>
    )

}

export default AddMonthDetails;