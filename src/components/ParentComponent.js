import react, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("john");
  const [lastName, setLastName] = useState("henry");
  const [newsLetter, setNewsLetter] = useState(false);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleNewsLetterChange(e) {
    setNewsLetter(e.target.checked);
  }
  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        newsLetter={newsLetter}
        handleNewsLetterChange={handleNewsLetterChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </>
  );
};
export default ParentComponent;
