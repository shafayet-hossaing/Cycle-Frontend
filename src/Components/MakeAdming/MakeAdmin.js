import axios from "axios";
import React, { useState } from "react";
import { Alert } from "@mui/material";
import { Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const takeInputValue = (e) => {
    setEmail(e.target.value);
  };
  const makeAdmin = (e) => {
    const user = { email };
    axios
      .put("https://guarded-savannah-06230.herokuapp.com/user", user)
      .then((response) => {
        if (response.data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow p-5 rounded-3">
        <h2 className="text-center fw-bold text-primary mb-4">Make Admin</h2>
        <form className="input-group" onSubmit={makeAdmin}>
          <input
            type="email"
            placeholder="Admin Email"
            className="form-control"
            onBlur={takeInputValue}
          />
          <Button type="submit" variant="primary">
            Make Adming
          </Button>
        </form>
        {success && <Alert severity="success">Successfully created</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;
