import './App.css';
import CatFactCard from "./components/CatFactCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Fact Generator</h1>
        <CatFactCard data={["Yes", "No"]}/>
      </header>
    </div>
  );
}

export default App;
