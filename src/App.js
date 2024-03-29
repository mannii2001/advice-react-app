import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [advice,setAdvice] = useState("");

  useEffect(()=>{
    fetchAdvice();
  },[])

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        setAdvice( advice );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
   <>
    <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div></>
  );
}

export default App;
