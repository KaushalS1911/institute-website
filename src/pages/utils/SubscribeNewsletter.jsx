import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Subscribe = () => {
  return (
    <>
      <div className="container ">
        <div className="my-5 text-center d-flex justify-content-center align-items-center">
          <div className="col-xl-6 col">
            <div className="h1 text-center"> Subscribe to our newsletter </div>
            <p>
              Read articles from{" "}
              <span className="subscribe">JBS IT INSTITUTE</span> directly
              inside your inbox. Subscribe to the newsletter, and don't miss
              out.
            </p>

            <div>
              <InputGroup className="my-4">
                <Form.Control
                  className="py-3 subscribe_control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  className="bg-prim"
                  id="button-addon2"
                >
                  SUBSCRIBE
                </Button>
              </InputGroup>
              {/* <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control py-3 subscribe_input"
                  placeholder="Enter your email address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-secondary  bg-prim"
                  type="button"
                  id="button-addon2"
                >
                  SUBSCRIBE
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
