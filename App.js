import './App.css';
import React, { useEffect,useState } from 'react'
function App(){
    const [count,setCount]=useState(0)
    useEffect(() =>{
        console.warn("useEffect")
    })
    return(
        <div className="App">
            <h1>useEffect in React Application {count}</h1>
            <button onClick={() =>setCount(count+1)}>Update counter</button>
        </div>
    );
}

export default App;