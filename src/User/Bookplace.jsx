import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookplace.css";

function Bookplace() {
  const [formData, setFormData] = useState({
     id:"",
     name: "",
    email: "",
    phone: "",
    number_of_days: "",
    arrival_date: "",
    departure: "",
    price: 0,
    status:""  });

  const navigate = useNavigate();
  const location = useLocation();
  const { id, price } = location.state || {}; 

  useEffect(() => {
    if (formData.number_of_days && price) {
      const calculatedPrice = Number(formData.number_of_days) * price;
      setFormData((prevData) => ({
        ...prevData,
        price: calculatedPrice,
      }));
    }
  }, [formData.number_of_days, price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost/tourbackend/controllers/api/User/post/book.php",
        { 
          ...formData, 
          package_id: id, 
          id: id, 
          status: "pending" 
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.message);
      alert("booking successfull");
      navigate("/bookpack");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking.");
    }
  };
  

  return (
    <div className="vr-body">
    <button className="vr-back-button" onClick={() => navigate("/bookpack")}>
      ← Back
    </button>
    <div className="vr-container">
      <h1 className="vr-title">Booking Form</h1>
      <form className="vr-form" onSubmit={handleSubmit}>
          <div className="vr-form-group">
            <label className="vr-label">Name:</label>
            <input
              className="vr-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Email:</label>
            <input
              className="vr-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Phone Number:</label>
            <input
              className="vr-input"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Arrival Date:</label>
            <input
              className="vr-input"
              type="date"
              name="arrival_date"
              value={formData.arrival_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Departure Date:</label>
            <input
              className="vr-input"
              type="date"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Number of Days:</label>
            <input
              className="vr-input"
              type="number"
              name="number_of_days"
              value={formData.number_of_days}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Calculated Price:</label>
            <input
              className="vr-input"
              type="text"
              value={formData.price || "N/A"}
              disabled
            />
          </div>
          <button className="vr-submit-btn" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bookplace;

