import React, { useState } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";
import DisplayEmployees from "../DisplayEmployees/DisplayEmployees";

const UserData = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handleAdd = () => {
    // Validation the user data
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === ""
    ) {
      alert("Please fill in all the fields");
      return;
    }

    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };

    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handleDeleteEmployee = index => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <>
      <Form>
        <InputFields>
          <FormTitle>New Employee</FormTitle>
          <FormTextFields>
            <UserInputDataForm>
              <label className="firstName" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </UserInputDataForm>
            <UserInputDataForm>
              <label className="lastName" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </UserInputDataForm>
            <UserInputDataForm>
              <label className="email" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </UserInputDataForm>
            <UserInputDataForm>
              <label className="phone" htmlFor="phone">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </UserInputDataForm>
            <Buttons>
              <button className="clear" onClick={handleClear}>
                CLEAR ALL
              </button>
              <button className="add" onClick={handleAdd}>
                ADD
              </button>
            </Buttons>
          </FormTextFields>
        </InputFields>
      </Form>
      <DisplayAllEmployees>
        {employees.length > 0 && (
          <DisplayEmployees
            employees={employees}
            onDeleteEmployee={handleDeleteEmployee}
          />
        )}
      </DisplayAllEmployees>
    </>
  );
};

export default UserData;

// ------------------Styling------------------

const Form = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DisplayAllEmployees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const InputFields = styled.div`
  height: 50vh;
  width: 40vw;
  border: 1px solid #0fbbbb;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const FormTitle = styled.div`
  width: 100%;
  height: 15%;
  font-size: 1.3em;
  background-color: #0fbbbb;
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  font-family: "Poppins", sans-serif;
  color: white;
  letter-spacing: 1px;
  border-radius: 10px 10px 0 0;
`;

const FormTextFields = styled.div`
  width: 40vw;
  display: flex;
  height: calc(50vh - 15%);
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const UserInputDataForm = styled.div`
  display: grid;
  grid-template-columns: 5fr 10fr;
  grid-template-rows: repeat(4, 10px);
  align-items: center;
  input {
    font-size: 1.1em;
    padding: 0.5em;
    height: 2em;
    width: 80%;
    margin-right: 3em;
    border: 2px solid #0fbbbb;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
  }
  label {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.1em;
    font-weight: 600;
  }
  .firstName:before,
  .lastName:before {
    content: "*";
    position: relative;
    left: 6em;
    font-size: 0.9em;
    top: -0.8em;
    color: red;
  }
  .email:before,
  .phone:before {
    content: "*";
    position: relative;
    left: 3.5em;
    font-size: 0.9em;
    top: -0.8em;
    color: red;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5em;
  .clear {
    font-size: 1em;
    margin-right: 1em;
    background: transparent;
    border: none;
    opacity: 50%;
    cursor: pointer;
  }
  .add {
    font-size: 1.2em;
    width: 6em;
    height: 1.8em;
    border: 2px solid #0fbbbb;
    border-radius: 1em;
    background: #0fbbbb;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background: transparent;
        color: #0fbbbb;
        transition: .3s ease all;
    }
  }
`;
