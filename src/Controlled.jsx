import { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function onChangeNameHandler(e) {
    const capName = e.target.value.toUpperCase();
    setName(capName);
    console.log(e.target.value);
  }

  function onChangePasswordHandler(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <form className="App">
        <label>First Name</label>
        <br />
        <input type="text" value={name} onChange={onChangeNameHandler} />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          value={password}
          onChange={onChangePasswordHandler}
        />
      </form>
    </>
  );
}

export default Controlled;
