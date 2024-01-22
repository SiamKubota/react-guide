import Card from "./components/Card";

function App() {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col justify-center items-center h-dvh">
        <h1 className="text-9xl text-red-800">todos</h1>
        <Card>
          <Card.Header>CardHeader</Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer>CardFooter</Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
