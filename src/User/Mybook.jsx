import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './mybook.css';

function Mybook() {
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    axios
      .get('http://localhost/tourbackend/controllers/api/User/Get/book.php') // Replace with your API endpoint
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Invalid response format from server.');
        }
      })
      .catch((error) => {
        console.error('Error fetching booking data:', error);
        setError('Failed to fetch booking data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleBack = () => {
    navigate('/userpanel'); // Change this to your desired route
  };

  if (loading) {
    return <div className="loading">Loading bookings...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <div className="main-mybook">
        <div className="vrs-container">
          <h1 className="vrs-heading">Tour package Bookings</h1>
          <table className="vrs-table">
  <thead>
    <tr className="vrs-table-header">
      <th className="vrs-table-cell">Id</th>
      <th className="vrs-table-cell">Name</th>
      <th className="vrs-table-cell">Email</th>
      <th className="vrs-table-cell">Phone</th>
      <th className="vrs-table-cell">Arrival Date</th>
      <th className="vrs-table-cell">Departure Date</th>
      <th className="vrs-table-cell">Number of Days</th>
      <th className="vrs-table-cell">Price</th>
      <th className="vrs-table-cell">Status</th>
    </tr>
  </thead>
  <tbody>
    {bookings.length > 0 ? (
      bookings.map((booking) => (
        <tr className="vrs-table-row" key={booking.id}>
          <td className="vrs-table-cell">{booking.id}</td>
          <td className="vrs-table-cell">{booking.name}</td>
          <td className="vrs-table-cell">{booking.email}</td>
          <td className="vrs-table-cell">{booking.phone}</td>
          <td className="vrs-table-cell">{booking.arrival_date}</td>
          <td className="vrs-table-cell">{booking.departure}</td>
          <td className="vrs-table-cell">{booking.number_of_days}</td>
          <td className="vrs-table-cell">{booking.price}</td>
          <td className="vrs-table-cell">{booking.status}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="9" style={{ textAlign: 'center' }}>
          No bookings found
        </td>
      </tr>
    )}
  </tbody>
</table>

{/* Back Button Below Table */}
<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <button className="back-buttonf" onClick={handleBack}>Back</button>
</div>

        </div>
      </div>
    </>
  );
}

export default Mybook;
