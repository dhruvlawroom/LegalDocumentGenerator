import React from 'react';

const Form = ({ formData, handleChange }) => {
  const formFields = [
    { label: <strong>CRM-M- Number</strong>, name: "crmNumber" },
    { label: "Year", name: "year" },
    { label: "Petitioner Name", name: "petitionerName" },
    { label: "Petitioner Name 2 (Optional)", name: "petitionerName2" },
    { label: "Respondent Name", name: "respondentName" },
    { label: "PH-No", name: "phno" },
    { label: "NOR-NO", name: "norNumber" },
    { label: "Father's Name", name: "fathersName" },
    { label: "Age", name: "age" },
    { label: "House Address", name: "houseAddress" },
    { label: "Mobile Number", name: "mobileNumber" },
    { label: "Aadhaar Card Number", name: "aadhaarNumber" },
    { label: "State", name: "state" },
    { label: "Lawyer Name", name: "lawyerName" },
    { label: "Dated", name: "dated" },
    { label: "Note 3 (Optional)", name: "note3" },
    { label: "Fir translation", name: "firtranslation" }

  ];

  return (
    <form className="edit-form-container">
      {formFields.map((field, index) => (
        <div className="mb-3" key={index}>
          <label className="form-label">{field.label}</label>
          <input
            type="text"
            className="form-control"
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
    </form>
  );
};

export default Form;
