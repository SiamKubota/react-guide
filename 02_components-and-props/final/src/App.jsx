import "./App.css";

function ProgrammingCard() {
  return (
    <section className="container">
      <h1>Javascript</h1>
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <>
      <div>
        <h1>Programming Languages and Toools</h1>
        <ProgrammingCard />
        <ProgrammingCard />
        <ProgrammingCard />
      </div>
    </>
  );
}

export default App;
