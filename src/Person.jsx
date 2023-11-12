import { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [age, setAge] = useState(100);

  const handleIncreaseAge = () => {
    setAge(age + 1);
    console.log('down here');
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // this console.log runs every time the component renders
  console.log('new render: ');

  return (
    <>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <br />
      <br />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <h1>{firstName + ' ' + lastName}</h1>
      <h2>{age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default Person;
