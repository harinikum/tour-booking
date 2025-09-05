import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './managebook.css';

function Managebook() {
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({}); 
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch booking data from API
  useEffect(() => {
    axios
      .get('http://localhost/tourbackend/controllers/api/User/Get/book.php')
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          console.error('Unexpected response format', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching booking data:', error);
      });
  }, []);

  const handleEditClick = (id) => {
    setEditId(id);
    const bookingToEdit = bookings.find((booking) => booking.id === id);
    setEditData({ ...bookingToEdit });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSaveClick = () => {

    const { name, email, phone, arrival_date, departure, number_of_days, price, status } = editData;
  
    if (!name || !email || !phone || !arrival_date || !departure || !number_of_days || !price || !status) {
      alert('Please fill in all fields before saving.');
      return;
    }
  
   
    axios
      .post('http://localhost/tourbackend/controllers/api/admin/put/book.php', editData)
      .then((response) => {
          setBookings((prev) =>
            prev.map((booking) => (booking.id === editData.id ? { ...editData } : booking))
          
          );
          alert('User details updated successfully');

          
          setEditId(null); 
         
      })
      .catch((error) => {
        alert('An error occurred while saving changes.');
        console.error('Error saving changes:', error);
      });
  };
  

  const handleCancelClick = () => {
    setEditId(null); 
    setEditData({});
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      axios
        .post('http://localhost/tourbackend/controllers/api/admin/delete/book.php', { id })
        .then((response) => {
          if (response.data.success) {
            setBookings((prev) => prev.filter((booking) => booking.id !== id));
          } else {
            console.error('Failed to delete booking', response.data);
          }
        })
        .catch((error) => {
          console.error('Error deleting booking:', error);
        });
    }
  };

  return (
    <div className="manage">
      <div className="container-manage">
       
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <table className="vehicle-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Arrival Date</th>
              <th>Departure</th>
              <th>Days</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  {editId === booking.id ? (
                    // Render editable fields
                    <>
                      <td>{booking.id}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="email"
                          value={editData.email}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="phone"
                          value={editData.phone}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          name="arrival_date"
                          value={editData.arrival_date}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          name="departure"
                          value={editData.departure}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="number_of_days"
                          value={editData.number_of_days}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="price"
                          value={editData.price}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <select
                          name="status"
                          value={editData.status}
                          onChange={handleInputChange}
                        >
                          <option value="Approved">Approved</option>
                          <option value="Unapproved">Unapproved</option>
                        </select>
                      </td>
                      <td>
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    // Render normal row
                    <>
                      <td>{booking.id}</td>
                      <td>{booking.name}</td>
                      <td>{booking.email}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.arrival_date}</td>
                      <td>{booking.departure}</td>
                      <td>{booking.number_of_days}</td>
                      <td>{booking.price}</td>
                      <td>{booking.status}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEditClick(booking.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDeleteClick(booking.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" style={{ textAlign: 'center' }}>
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Managebook;

