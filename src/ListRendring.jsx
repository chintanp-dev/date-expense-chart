import React from "react";

function ListRendring() {
  const Employee = ["Chintan", "Sagar", "Chintan", "Aditya", "Pratik", "Yash"];

  const Result = Employee.map((e, index) => (
    <h1 key={index}>
      {e} Unique key is {index}
    </h1>
  ));

  return (
    <>
      <h6>{Result}</h6>
      <br />
    </>
  );
}

export default ListRendring;
