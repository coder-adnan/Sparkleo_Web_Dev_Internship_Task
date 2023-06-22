import React from "react";
import { styled } from "styled-components";

// DisplayEmployees component receives `employees` and `onDeleteEmployee` as props
const DisplayEmployees = ({ employees, onDeleteEmployee }) => {
  // Function to handle employee deletion
  const handleDelete = index => {
    // Call the onDeleteEmployee function passed as prop
    onDeleteEmployee(index);
  };

  return (
    <MainContainer>
      <Heading>
        <h1>Current Employees</h1>
      </Heading>
      {/* Map over the employees array and render each employee */}
      {employees.map((employee, index) => (
        <CurrentEmployees key={index}>
          <EmployeeDetails>
            <h2>
              {employee.firstName} {employee.lastName}
            </h2>
            <p>{employee.email}</p>
            <p>{employee.phone}</p>
          </EmployeeDetails>
          {/* Add the delete button for each employee */}
          <RemoveEmployee onClick={() => handleDelete(index)}>X</RemoveEmployee>
        </CurrentEmployees>
      ))}
    </MainContainer>
  );
};

export default DisplayEmployees;

const MainContainer = styled.div`
width: 100vw;
background: #0fbbbb;
display: flex;
flex-direction: column;
justify-content: center;
padding: 5em 0 5em 0;

h1{
    margin-left: 23rem;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
font-family: 'Poppins', sans-serif;
color: white;
margin-bottom: 1em;
    }
`;
const CurrentEmployees = styled.div`
width: 50vw;
margin: auto;
display: flex;
height: 8em;
background: #096c9b;
justify-content: center;
align-items: center;
padding: 1em 5em 1em 5em;
margin-bottom: 2em;
border-radius: 20px;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
font-family: 'Poppins', sans-serif;
color: white;
h2{
    margin-bottom: .2em;
}
p{
    margin-bottom: .3em;
}
`;
const EmployeeDetails = styled.div`
width: 100%;
`;
const RemoveEmployee = styled.div`
width: 2em;
height: 2em;
font-size: 1.6em;
border: 2px solid white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 50%;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
font-family: 'Poppins', sans-serif;
font-weight: 700;
`;
const Heading = styled.div`
`;
