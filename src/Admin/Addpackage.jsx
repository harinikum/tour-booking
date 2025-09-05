import React, { useState } from "react";
import axios from "axios";
import "./package.css";

function Addpackage() {
  const [formData, setFormData] = useState({
    packname: "",
    city: "",
    price: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const payload = new FormData();
    payload.append("packname", formData.packname);
    payload.append("city", formData.city);
    payload.append("price", formData.price);
    payload.append("file", formData.file);

    try {
      const response = await axios.post("http://localhost/tourbackend/controllers/api/User/post/pic.php", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message || "Package added successfully!");
    } catch (error) {
      console.error("Error adding package:", error);
      alert(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <>
      <div className="main-2">
        <div className="twomain">
          <div className="container-two">
            <h1>Add Packages</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="packname">Package Name:</label>
                  <input
                    type="text"
                    id="packname"
                    name="packname"
                    value={formData.packname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City Name:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Package Price:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="file">Image:</label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="file-input"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addpackage;
