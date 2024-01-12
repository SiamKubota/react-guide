import { useState } from "react";
import "./App.css";

function ProgrammingCard(props) {
  const [liked, setLiked] = useState(false);

  console.log("props: ", props);

  function onClickLike(event) {
    props.onChangeLike(props.programmingName);
    setLiked(event.target.checked);
  }

  return (
    <section className="container">
      <p>{props.programmingName}</p>
      <input type="checkbox" value={liked} onChange={onClickLike} />
      <ul>
        <li>{props.lib1}</li>
        <li>{props.lib2}</li>
        <li>{props.lib3}</li>
      </ul>
    </section>
  );
}

function App() {
  function alertClickChildrenComp(programmingName) {
    alert("You click like " + programmingName);
  }

  return (
    <div>
      <h1>Programming languages and tools</h1>
      <ProgrammingCard
        programmingName="Javacript"
        lib1="React"
        lib2="Angular"
        lib3="Vue"
        onChangeLike={alertClickChildrenComp}
      />
      <ProgrammingCard
        programmingName="Python"
        lib1="Django"
        lib2="FastAPI"
        onChangeLike={alertClickChildrenComp}
      />
      <ProgrammingCard
        programmingName="Java"
        lib1="Spring"
        onChangeLike={alertClickChildrenComp}
      />
    </div>
  );
}

export default App;
