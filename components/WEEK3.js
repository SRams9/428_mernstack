import React from "react";
import Table from "react-bootstrap/Table";
import "./Week3.css";
import "bootstrap/dist/css/bootstrap.min.css";
function PropsComponentWithOneAttribute(props) {
  return (
    <div>
      <h2> single attribute </h2>
      <h2 style={{ color: "skyblue" }}>
        This is Week3 of  {" "}
        <span style={{ color: "skyblue" }}>{props.name}</span>
      </h2>
    </div>
  );
}
function PropsComponentWithMultiAttribute(props) {
  return (
    <div>
        <h2> Rendering multiple  attribute using props </h2>
            <h2 style={{ color: "skyblue" }}>
        Hello I Am <span style={{ color: "skyblue" }}>{props.name}</span>
      </h2>
      <h2 style={{ color: "darkblue" }}>
        MY Hall ticket no is {" "}
        <span style={{ color: "black" }}>{props.rno}</span>
      </h2>
    </div>
  );
}
function StudentDetails(props) {
  const student = props.student;
  return (
    <div className="center">
      <h2 style={{ textDecorationLine: "underline",  color:"Graytext"}}>
        Student Details using Props{" "}
      </h2>
      <Table striped bordered hover variant="go">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.semail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function EmpDetails(props) {
  const employee = props.employee;
  return (
    <div className="center">
      <h2 style={{ textDecorationLine: "underline",  color:"GrayText"}}>
        Employee Details using Props{" "}
      </h2>
      <Table striped bordered hover variant="go">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name of the Employee</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function StudentDetailsObjectDestruction(props) {
  const student = props.student;
  return (
    <div className="center">
      <h2 style={{ textDecorationLine: "underline",  color:"GreyText"}}>
        Student details using Object Destruction{" "}
      </h2>
      <Table striped bordered hover variant="ready">
        <thead>
          <tr>
            <th>Hall Ticket No</th>
            <th>Name of the Student</th>
            <th>Email</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.htno}</td>
              <td>{student.name}</td>
              <td>{student.mailid}</td>
              <td>{student.mobileno}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function Week3() {
  const studentObj = [
    
    {
      htno: "123",
      name: "Amulya",
      mailid:"Amulya@gmail.com",
      mobileno: "1234567892",
    },
    {
      htno: "456",
      name: "sneha",
      mailid:"Sneha@gmail.com",
      mobileno: "9876543292",
    },
  ];
  const student = [
    { sid:"456", sname: "Akhila", semail: "Akhila@gmail.com" },
    { sid:"789", sname: "Sneha", semail: "Sneha@gmail.com" },
    { sid:"436", sname: "Amulya", semail: "Amulya@gmail.com" },
    {
      sid: "754",
      sname: "Vyshnavi",
      semail: "vyshu34@gmail.com",
    },
  ];
  const emp = [
    { eid: "273", ename: "Aishwarya", designation: "CEO" },
    {
      eid: "225",
      ename: "Darani",
      designation: "Manager",
    },
    { eid: "488", ename: "Samita", designation: "Accountant" },
    {
      eid: "964",
      ename: "vijay",
      designation: "Front-End-developer",
    },
  ];
  return (
    <div>
      <h1>Week 3 - Create React App and Demonstrate Props</h1>
      <hr />
      <h3>
        QNO.1. Create a React Component, using props render one & multiple
        attribute values and display it on the webpage.
      </h3>
      <PropsComponentWithOneAttribute name="MERN Stack" />
      <hr/>
      <PropsComponentWithMultiAttribute
        name="Amulya from Group 7"
        rno="2211cs010436"
      />
      <hr />
      <h3>
        QNo.2. Create a React Component, using props through functions display
        student details (Std-id, Std-Name, Std-Email) on the webpage.
      </h3>
      <StudentDetails student={student} />
      <hr />
      <h3>
        QNO.3. Create a React Component, using props through classes display
        employee details (Emp-id, Emp-Name, Emp-Designation) on the webpage.
      </h3>
      <EmpDetails employee={emp} />
      <hr />
      <h3>
        QNO.4. Create a Student component and able to display Student details
        which vary in htno, name, mailid, and mobileno to users.
      </h3>
      <StudentDetailsObjectDestruction student={studentObj} />
    </div>
  );
}
export default Week3;