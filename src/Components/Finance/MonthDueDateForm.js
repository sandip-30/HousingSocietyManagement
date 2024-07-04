import React, { useState } from 'react';
import axios from 'axios';
const MonthDueDateForm = () => {
  const [year, setYear] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [formData, setFormData] = useState(null);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate((event.target.value ));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = generateMonthlyDueDates(year, dueDate);
    setFormData(data);
    try {
      const response = await axios.post('https://society-management-syste-4b7b1-default-rtdb.asia-southeast1.firebasedatabase.app/flatsRegistration/dueDate.json', data)
      // alert('Registration successful!');
      console.log(data);

  } catch (error) {
      alert('Due Date failed. Please try again.');
      console.log(data);
  }

    console.log('Form Data:', data);
  };

  const generateMonthlyDueDates = (year, dueDate) => {

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dueDateObject = new Date(dueDate);
    // const day = dueDateObject.getDate();
    dueDateObject.setDate(dueDateObject.getDate() + 1) // Added Day + 1
    const day= (String(dueDateObject.getDate()).padStart(2, '0'));
    const dueDates = {};

    months.forEach((month, index) => {
      const date = new Date(year, index, day);
      // Adjust for months where the same date doesn't exist (e.g., Feb 30)
      if (date.getMonth() !== index) {
        date.setMonth(index + 1, 0); // Set to last day of the month
      }
      dueDates[month] = date.toISOString().split('T')[0];
      console.log(date.toISOString().split('T')[0]);
    });

    return { [year]: dueDates };

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="yearInput">Year:</label>
          <input
            type="number"
            id="yearInput"
            value={year}
            onChange={handleYearChange}
            required
            min="1900"
            max="2100"
          />
        </div>
        <div>
          <label htmlFor="dueDateInput">Due Date:</label>
          <input
            type="date"
            id="dueDateInput"
            value={dueDate}
            onChange={handleDueDateChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MonthDueDateForm;
