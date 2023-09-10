import react from "react";
import React from "react";

function Form({
  firstName,
  lastName,
  newsLetter,
  handleFirstNameChange,
  handleLastNameChange,
  handleNewsLetterChange,
}) {
  const [number, setNumber] = React.useState(0);
  const [invalidNumber, setInvalidNumber] = React.useState(null);
  function handleNumberChange(e) {
    const num = parseInt(e.target.value);
    if (num >= 0 && num <= 5) {
      setNumber(num);
    } else {
      setInvalidNumber(`${num} is not a valid number`);
    }
  }
  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <label htmlFor="newsletter">Newsletter</label>
      <input
        type="checkbox"
        id="newsletter"
        checked={newsLetter}
        onChange={handleNewsLetterChange}
      />
      <input type="number" value={number} onChange={handleNumberChange} />
      {invalidNumber ? <span>{invalidNumber}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
