function Card({ children }) {
  console.log(children);
  return <div className="card">{children}</div>;
}

function Greeting() {
  return (
    <Card>
      <>
        <h1>My name is Anurag !! 🙏🙏</h1>
        <p>I am a full stack developer and I am learning React.</p>
      </>
    </Card>
  );
}

export default Greeting;
