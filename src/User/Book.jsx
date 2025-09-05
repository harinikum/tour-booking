import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./book.css";

function Book() {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost/tourbackend/controllers/api/User/Get/roomimage.php")
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
      });
  }, []);

  return (
    <div className="main-book1">
   <div className="h1two">
  BOOK PACKAGES
  <button className="back-button" onClick={() => navigate("/userpanel")}>
    ← Back
  </button>
</div>


      <div className="two-card">
        {packages.map((pkg) => (
          <div className="tour-card" key={pkg.id}>
            <img
              src={`http://localhost/tourbackend/controllers/api/User/upload/${pkg.file}`}
              alt={pkg.packname}
              className="tour-image1"
            />
            <div className="tour-details">
              <div className="tour-name">Place name: {pkg.packname}</div>
              <div className="tour-price">Price: ₹ {pkg.price}</div>
              <div className="tour-city">City: {pkg.city}</div>
            </div>
            <Link to={`/twodetail`} state={{ id: pkg.id, price: pkg.price }}>
              <button className="view-button1">Book</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
