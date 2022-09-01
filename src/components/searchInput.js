import React from "react";
import Form from "react-bootstrap/Form";

function SearchInput({ handleChange }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        onChange={(event) => handleChange(event)}
        type="text"
        placeholder="City"
      />
    </Form.Group>
  );
}

export default SearchInput;
