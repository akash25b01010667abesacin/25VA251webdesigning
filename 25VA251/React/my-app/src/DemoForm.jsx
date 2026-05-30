import React, { useState } from "react";

function DemoForm() {
  // Step 1: Create state for each input
  const [formData, setFormData] = useState({
    name: "",
    mob: "",
    email: ""
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Form submitted:", formData);
    alert(`Name: ${formData.name}\nMobile: ${formData.mob}\nEmail: ${formData.email}`);
  };

  return (
    <>
      <h1>User Data Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mob"
          placeholder="Enter Mobile"
          value={formData.mob}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter E-mail"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default DemoForm;
