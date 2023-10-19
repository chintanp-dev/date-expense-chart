function Child(props) {
  const childName = "Ronak";

  return (
    <>
      <h1>I am a {childName}</h1>
      <h1>I am a Ronak's Mother {props.motherName}</h1>
      {/* <button>Click to Change Name</button> */}
    </>
  );
}

export default Child;
