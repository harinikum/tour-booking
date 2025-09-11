import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewpackage.css";

function Viewpackage() {
  const [packages, setPackages] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost/tourbackend/controllers/api/User/Get/roomimage.php")
      .then((response) => {
        if (response.data) {
          setPackages(response.data);
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
    const pkg = packages.find((p) => p.id === id);
    setEditData({ ...pkg });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({...editData, [name]:value});
  };

  const handleSaveClick = () => {
  const { packname, city, price } = editData;

  if (!packname || !city || !price) {
    alert("Please fill in all fields before saving.");
    return;
  }

  axios
    .post(
      "http://localhost/tourbackend/controllers/api/admin/put/updatepackage.php",
      editData    )
    .then((res) => {
        setPackages((prev) =>
          prev.map((pkg) => (pkg.id === editData.id ? {...editData}: pkg))
        );
        alert("Updated successfully"); 
        setEditId(null);
      })
    .catch((err) => console.error("Error updating:", err));
};

  const handleCancelClick = ()=>{
    setEditId(null);
    setEditData({});
  }

 const handleDeleteClick = (id) => {
  if (window.confirm("Are you sure you want to delete this package?")) {
      axios.post(
  "http://localhost/tourbackend/controllers/api/admin/delete/deletepackage.php",
  JSON.stringify({ id }),
  {
    headers: { "Content-Type": "application/json" },
  }
)

      .then((res) => {
        if (res.data.message == "success") {
          setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
          alert("Package deleted successfully!");
        } else {
          alert("Delete failed");
        }
      })
      .catch((err) => console.error("Error deleting:", err));
  }
};


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tour Packages</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="border p-2">Package Name</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg.id} className="text-center">
              <td className="border p-2">
                {editId === pkg.id ? (
                  <input
                    type="text"
                    name="packname"
                    value={editData.packname || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  pkg.packname
                )}
              </td>
              <td className="border p-2">
                {editId === pkg.id ? (
                  <input
                    type="text"
                    name="city"
                    value={editData.city || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  pkg.city
                )}
              </td>
              <td className="border p-2">
                {editId === pkg.id ? (
                  <input
                    type="number"
                    name="price"
                    value={editData.price || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  `₹${pkg.price}`
                )}
              </td>
              <td className="border p-2">
                {editId === pkg.id ? (
                  <>
                    <button className="btn btn-save" onClick={handleSaveClick}>
                      Save
                    </button>
                    <button
                      className="btn btn-cancel"
                      onClick={ handleCancelClick}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-edit"
                      onClick={() => handleEditClick(pkg.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDeleteClick(pkg.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Viewpackage;
