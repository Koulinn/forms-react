import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function MyForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    handleSubmit();
  }, [email, name, select, radio, flag]);

  //I want the preventDefault to be invoked ONLY when e is defined

  /**
   * Our post request expects
   * primaryEmail: ''Needs an at @ String
   * first_name: '' String
   * category:'' String
   * sex: ''String
   * newsletter: Boolean
   *
   *
   */

  //You will ALWAYS RECEIVE at least name + surname
  // Valid Rafael Lima
  // Valid Rafael Verzola Peres de Lima
  // Valid Rafael V P Lima
  // Invalid Rafael
  // Invalid ''

  // Where : inside handleSubmit
  // When : Before you define the body
  // What :
  // How :

  /**
   * first_name : Expects to receive ONLY the first name (even if it is a composite name)
   * surname : Expects to receive at least a surname (can receive middle names)
   */

  const handleSubmit = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    // It needs to happen between this lines======================
    const array = name.split(" ");

    const firstName = array[0];
    const lastname = array.slice(1).join(" ");
    // ===========================================================
    // If you need to prepare a body
    const body = {
      primaryEmail: email,
      first_name: firstName,
      surname: lastname,
      category: select,
      sex: radio,
      newsletter: flag,
    };
    //
    // console.log(body, "body");
    //Send a request to the server
    // postRequest(body)
    // we need to prepare the body!!!!!!!!!!!!!!
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* Inputs */}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group>
        <div>
          <h5>Email state: {email}</h5>
        </div>
      </div>

      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Group>
        <div>
          <h5>name state: {name}</h5>
        </div>
      </div>

      {/* Select */}

      <Form.Select
        aria-label="Default select example"
        className="my-5"
        onChange={(e) => {
          setSelect(e.target.value);
        }}
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
          //   console.log(e.target.checked);
          // }}
          onChange={(e) => {
            e.target.checked ? setFlag(true) : setFlag(false);
            console.log(e.target.checked);
          }}
          value="I'm a checkbox with a value!!!!!"
        />
        <Form.Check
          type={"radio"}
          id={`default-${"radio"}`}
          label={`female`}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          checked={radio === "female"}
          value="female"
        />
        <Form.Check
          type={"radio"}
          id={`default-${"radio1"}`}
          label={`male`}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          checked={radio === "male"}
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
