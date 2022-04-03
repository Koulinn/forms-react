import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function MyForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    select: "",
    radio: "",
    flag: false,
  });

  const handleSubmit = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }

    // console.log(form, "====form====");
    // It needs to happen between this lines======================
    const array = form.name.split(" ");

    const firstName = array[0];
    const lastname = array.slice(1).join(" ");
    // ===========================================================
    // If you need to prepare a body
    const body = {
      primaryEmail: form.email,
      first_name: firstName,
      surname: lastname,
      category: form.select,
      sex: form.radio,
      newsletter: form.flag,
    };
    console.log(body, "=== body ===");
  };

  const handleForm = (value, dynamicProperty) => {
    setForm({ ...form, [dynamicProperty]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* Inputs */}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => handleForm(e.target.value, "email")}
            placeholder="Enter email"
          />
        </Form.Group>
        <div>
          <h5>Email state: {form.email}</h5>
        </div>
      </div>

      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleForm(e.target.value, "name")}
            placeholder="Name"
          />
        </Form.Group>
        <div>
          <h5>name state: {form.name}</h5>
        </div>
      </div>

      {/* Select */}

      <Form.Select
        aria-label="Default select example"
        className="my-5"
        onChange={(e) => handleForm(e.target.value, "select")}
      >
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      {/* Checkbox and Radio */}

      <div className="mb-3 my-3">
        <Form.Check
          type={"checkbox"}
          id={`default-${"checkbox"}`}
          label={`Would you like to receive offers?`}
          // onChange={(e) => {
          //   e.target.checked ? setFlag(true) : setFlag(false);
          // }}
          onChange={(e) =>
            e.target.checked
              ? handleForm(true, "flag")
              : handleForm(false, "flag")
          }
          value="I'm a checkbox with a value!!!!!"
        />
        <Form.Check
          type={"radio"}
          id={`default-${"radio"}`}
          label={`female`}
          onChange={(e) => handleForm(e.target.value, "radio")}
          checked={form["radio"] === "female"}
          value="female"
        />
        <Form.Check
          type={"radio"}
          id={`default-${"radio1"}`}
          label={`male`}
          onChange={(e) => handleForm(e.target.value, "radio")}
          checked={form.radio === "male"}
          value="male"
        />
      </div>

      <Button variant="primary" className="mt-5" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;
