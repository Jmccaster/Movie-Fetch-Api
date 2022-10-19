import React from "react";
import { useState, useEffect } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // handles an event and allows target event(submission) to populate and save info to state

  const handleSubmit = (e) => {
    e.preventDefault();
    props.moviesearch(formData.searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Movie"
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form;
