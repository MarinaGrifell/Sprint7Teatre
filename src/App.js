import React,{useState} from 'react';
import Linia from './components/linia'
import linies from './data/linies.json'
import styled from 'styled-components'


const StyledLinia= styled.h1` 
background: pink;
color: grey;
font-size: 15px;
`;

function App() {
const [count,setCount]=useState(0);
  function increment(){
    if ( count < linies.length-1) { setCount(count + 1)}
    console.log(count);
  }

  function decrement() {
    if ( count > 0) {setCount(count - 1) }
    console.log(count);

  }
  const liniaSelected =  linies.slice(count,count+1).map((item,index)=> {
    return (
    
    <StyledLinia key={index}>
    <Linia title={item}></Linia>
     </StyledLinia>
    
    )
   
  })

  return (
    <div className="App">


    <button onClick={decrement}>Anterior</button>
    <button onClick={increment}>Següent</button>
   
    {
      liniaSelected
     }
    
     
    </div>
  );
}

export default App;