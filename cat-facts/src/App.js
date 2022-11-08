import './App.css';
import { useState } from "react";

const api_url = "https://catfact.ninja/fact";
let facts = [];
const maxPages = 10;

function App() {
  const [index, setIndex] = useState(0);
  const [fact, setFact] = useState("Welcome to the Random Fact Cat Generator");
  const [call, setCall] = useState(true);
  const [favorite, setFavorite] = useState('white');
  
  return (
    <div className='App-header'>
      <h1>Cat Fact Generator</h1>
      <div style={{
        color:favorite,
        padding:'5%',
      }}>{fact}</div>
      <div style={{
        display:'flex',
        flexDirection:'row',
      }}>
        <button onClick = {() => { 
          if (index > 0) {
            setIndex(index-1);
            setFact(facts[index-1].fact);
            setFavorite(facts[index-1].fav);
          }
        }}>Left</button>
        <button onClick = {() => {
          getFact();
          setCall(!call);
          setIndex(0);
          setFact(facts[0].fact);
          setFavorite("white");
        }}>New Fact</button>
        <button onClick = {() => { 
          if (index + 1 < facts.length) {
            setIndex(index+1);
            setFact(facts[index+1].fact);
            setFavorite(facts[index+1].fav);
          }
        }}>Right</button>
      </div>
      <div style={{
        display:'flex',
        flexDirection:'row',
      }}>
        <button onClick = {() => {
          setFavorite('orange');
          facts[index].fav = 'orange';
        }}>Favorite</button>
        <button onClick = {() => {
          setFavorite('white');
          facts[index].fav = 'white';
        }}>Unfavorite</button>
      </div>

    </div>
  );
}

function getFact() {
  fetch(api_url)
      .then((response) => response.json())
      .then((data) => updateFacts(data.fact, facts));
}

function updateFacts(newFact) {
  facts.unshift({
    fact:newFact,
    fav:'white'
  });
  if (facts.length > maxPages) {
    facts.pop();
  }
}


export default App;