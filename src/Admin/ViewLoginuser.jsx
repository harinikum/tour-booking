import React, { useEffect, useState } from "react";
// import "../Style/customerTable.css";

const API_URL =
  "http://localhost/tourbackend/controllers/api/User/Get/userlogindetails.php";

const UPDATE_STATUS_URL =
  "http://localhost/tourbackend/controllers/api/admin/put/updatelogindetail.php";

const ViewLoginuser = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleStatusChange = (email, currentStatus) => {
    const updatedStatus = currentStatus === 1 ? 0 : 1;

    fetch(UPDATE_STATUS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, status: updatedStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          fetchCustomers(); 
        } else {
          console.error("Error updating status:", data.error);
        }
      })
      .catch((error) => console.error("Error updating user status:", error));
  };


  return (
    <div className="dashboard-container">
      <div className="contents">
        <h2>Customer Details</h2>
        <div className="table-wrapper">
          <table className="customer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.length > 0 ? (
                customers.map((customer) => (
                  <tr key={customer.email}>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>
                      <button
                        className={
                          customer.status === 1
                            ? "unblocked-btn"
                            : "blocked-btn"
                        }
                        onClick={() =>
                          handleStatusChange(customer.email, customer.status)
                        }
                      >
                        {customer.status === 1 ? "block" : "unblock"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewLoginuser;
