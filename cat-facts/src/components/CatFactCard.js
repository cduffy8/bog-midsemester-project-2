import { useState, useEffect } from "react";

const api_url = "https://catfact.ninja/fact";
const maxPages = 10;

function CatFactCard(props) {
    const { index, count } = props;
    const [facts, setFacts] = useState([]);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
      if (count > facts.length - 1) {
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
          setFacts(
            [
              ...facts,
              {
                data:data.fact,
                favorite:'white',
                id: count+1,
              } 
            ]
          );
        });
      }
      const last = Math.min(index*10 + maxPages, count+1);
      setDisplay(facts.slice(index*10, last));
    }, [count, index, facts]);

    console.log(display);

    return (
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          padding:'1%',
        }}>
            {
              display.map((disp)=> (
                <div key={disp.id} style={{
                  color:disp.favorite,
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'space-between',
                }}>
                    {disp.id + ". " + disp.data}
                    <button onClick={() => {
                      const target = disp.id;
                      setFacts(facts.map((entry) => {
                        if (entry.id === target) {
                          if (entry.favorite === 'white') {
                            return {...entry, favorite:'orange'};
                          } else {
                            return {...entry, favorite:'white'};
                          }
                        } else {
                          return entry;
                        }
                      }));
                    }}>Favorite</button>
                </div>
            ))}
        </div>
    );
}

export default CatFactCard;