import { useState } from 'react';

function CustomInput() {
  const [value, setValue] = useState('');
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          console.log(event);
          setValue(event.target.value);
        }}
      />
    </>
  );
}

export { CustomInput };
