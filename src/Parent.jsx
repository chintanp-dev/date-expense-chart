import Child from "./Child";
import { useState } from "react";

function Parent() {
  //   const parentName = "Bharat Bhai";

  const [motherName, setMotherName] = useState("Kirti Ben");
  const onChangeMotherName = () => {
    setMotherName(prompt("Write to Change Name"));
  };

  return (
    <>
      <h1>I am a {motherName}</h1>
      <Child motherName={motherName} />
      <button onClick={onChangeMotherName}>Click me to Change Name</button>
    </>
  );
}

export default Parent;
