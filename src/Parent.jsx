import { useState } from 'react';

function ParentComponent() {
  const [messageColor, setMessageColor] = useState('blue');

  const changeColor = () => {
    setMessageColor('red');
  };

  return (
    <div>
      <button onClick={changeColor}>Change Color to Red</button>
      <Message messageColor={messageColor} />
      <Message messageColor={messageColor} />
    </div>
  );
}

function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  // console.log({ color });
  console.log(color);
  return (
    <div style={{ color }}>The message text with color: {messageColor}</div>
  );
}

export default ParentComponent;
