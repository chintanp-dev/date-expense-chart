import { useState } from "react";

function Conditional_Randering() {
  //   const [login, setLogin] = useState (1)

  const login = 8;

  let str;

  if (login <= 10) str = 10;

  if (login <= 20) str = 20;

  if (login <= 30) str = 30;

  if (login <= 40) str = 40;

  if (login <= 50) str = 50;
  //   else str = <h1> Welcome Guest you are not User </h1>;

  for (let index = 10; index < 60; index += 10) {
    if (login <= index) {
      str = index;
    }
  }
}

const el = <h1> Welcome User Below </h1>;

export default Conditional_Randering;
