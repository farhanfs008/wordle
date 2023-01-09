import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(()=> {
    fetch('https://farhanfs008.github.io/json-wordle/db.json')
      .then(res => res.json())
      .then(json => {
        //random int between 0 to 21
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.solutions.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle (Lingo) </h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
