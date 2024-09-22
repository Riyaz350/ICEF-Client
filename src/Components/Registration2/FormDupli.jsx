import React, { useState } from "react";
import axios from "axios";

const FormDupli = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    whatsAppNo: "",
    email: "",
    password: "",
    companyName: "",
    address: "",
    city: "",
    website: "",
    postcode: "",
    country: "",
    recruitCountry: "",
  });

  const [file, setFile] = useState(null); // For handling file upload
  const [statusMessage, setStatusMessage] = useState(""); // For displaying status

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object for the request
    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("mobileNo", formData.mobileNo);
    formDataObj.append("whatsAppNo", formData.whatsAppNo);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("companyName", formData.companyName);
    formDataObj.append("address", formData.address);
    formDataObj.append("city", formData.city);
    formDataObj.append("website", formData.website);
    formDataObj.append("postcode", formData.postcode);
    formDataObj.append("country", formData.country);
    formDataObj.append("recruitCountry", formData.recruitCountry);

    if (file) {
      formDataObj.append("file", file); // Attach the file only if present
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/registrations", // Adjust this URL to match your backend
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setStatusMessage("Registration successful!");
    } catch (error) {
      console.error("Error submitting form", error);
      setStatusMessage("Error submitting the form.");
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Mobile No:</label>
        <input
          type="text"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleInputChange}
          required
        />
        <br />

        <label>WhatsApp No:</label>
        <input
          type="text"
          name="whatsAppNo"
          value={formData.whatsAppNo}
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br />

        <h3>Company Details</h3>

        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        <br />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <br />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <br />

        <label>Website:</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
        />
        <br />

        <label>Postcode:</label>
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleInputChange}
        />
        <br />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        />
        <br />

        <label>Recruit Country:</label>
        <input
          type="text"
          name="recruitCountry"
          value={formData.recruitCountry}
          onChange={handleInputChange}
        />
        <br />

        <h3>Upload File</h3>
        <input type="file" onChange={handleFileChange} />
        <br />

        <button type="submit">Submit</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default FormDupli;