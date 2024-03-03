import React, { useState, useEffect } from "react";
import "./week4.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
function UseStateExample() {
  const name = null;
  const rno = null;
  const [details, setDetails] = useState(
    <div>
      <h4>Name: {name}</h4>
      <h4>Roll No: {rno}</h4>
    </div>
  );
  const getDetails = () => {
    const name = "Sairam";
    const rno = "2211cs010428";
    setDetails(
      <div>
        <h4>Name: {name}</h4>
        <h4>Roll No: {rno}</h4>
      </div>
    );
  };
  return (
    <div className="">
      <h2>
        1. Create a React Component, Display initial State of Student
        Hall-ticket and Name and change its State by using useState().
      </h2>
      <h2 >Displaying details using UseState</h2>
      <div className="">
        <h3>{details}</h3>

        <button onClick={getDetails}>Click to get Details</button>
      </div>
    </div>
  );
}
function UseEffectExample() {
  const headings = ["SNO", "Name of the student", "Roll No", ];
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://sindhuravuri666.github.io/StudentList/StudentList.json"
      );

      const data = await response.json();

      console.log(data);

      setDetails(data);
    };

    fetchStudentDetails();
  }, []);
  const [details, sliceDetails] = useState();
  return (
    <div className="">
      <h2>
        2. Create a React Component, Display student Hall-ticket, Name and
        Email-Id using useEffect() fetch student info from student.json.
      </h2>

      <h2 >
        Displaying details using Use effect 
      </h2>
      <div className="center">
        <Table striped bordered hover variant="dark">
          <thead>
          <tr>
            {headings.map((h, index) => (
             
                
                <th key={h}>{h}</th>
             
            ))} </tr>
          </thead>
          <tbody>
            {Details.slice(21, 37).map((student, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
function Week4() {
  return (
    <div className="">
      <h2>
        Week 4 - Create React App and Implement API Calls using React Hooks
      </h2>
      <hr />
      <UseStateExample />
      <hr/>
      <UseEffectExample />
    </div>
  );
}
export default Week4;