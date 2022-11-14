import './App.css';
import { useState } from "react";
import CatFactCard from './components/CatFactCard';

const maxPages = 10;

function App() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState('white');
  
  return (

    <div className='App-header'>
      <h1>Cat Fact Generator</h1>
      <div style={{
        display:'flex',
        flexDirection:'row',
      }}>

        <button onClick = {() => { 
          if (index > 0) {
            setIndex(index-1);
          }
        }}>{'<'}</button>

        <button onClick = {() => {
          setCount(count+1);
          setIndex(Math.floor((count+1)/10));
        }}>New Fact</button>

        <button onClick = {() => { 
          if ((index+1)*maxPages <= count) {
            setIndex(index+1);
          }
        }}>{'>'}</button>

      </div>
      <CatFactCard index={index} count={count} />
    </div>
  );
}

export default App;