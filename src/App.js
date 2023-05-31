import "./App.css";

function App() {
  const generate = async () => {
    const response = await fetch(
      "https://y59hg4uhzc.execute-api.us-west-2.amazonaws.com/dev/catzen"
    );
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <div>
        <img src="https://cdn2.thecatapi.com/images/bkq.jpg"></img>
        <blockquote>Quote here</blockquote>
      </div>
      <button onClick={generate}>Generate</button>
    </>
  );
}

export default App;
