import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [liked, setLiked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function increment() {
    setCount((count) => count + 1);
  }

  function onChangeHandler(event) {
    console.log("event: ", event);
    console.log("event.target: ", event.target);
    console.log("value: ", event.target.value);
    setName(event.target.value);
  }

  function onCheckHandler(event) {
    console.log("event: ", event);
    console.log("event.target: ", event.target);
    console.log("value: ", event.target.checked);
    setLiked(event.target.checked);
  }

  function onChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function onChangeLastName(e) {
    setLastName(e.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log("firstName: ", firstName);
    console.log("lastName: ", lastName);
    alert(`Submit with data: ${firstName} ${lastName}`);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <h1>Hello {name}!</h1>
      <input type="text" value={name} onChange={onChangeHandler} />
      <h1>I {liked ? "liked" : "did not like"} React.</h1>
      <input type="checkbox" value={liked} onChange={onCheckHandler} />
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChangeFirstName}
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChangeLastName}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App;
