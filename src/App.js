import Linia from './linia'
import linies from './linies.json'
import styled from 'styled-components'

const StyledLinia= styled.h1` 
background: pink;
color: grey;
font-size: 15px;
text-align: center;
`;

function App() {
  return (
    <div className="App">
    {linies.map((item)=> {
      return (
      
      <StyledLinia>
      <Linia title={item}></Linia>
       </StyledLinia>
      
      )
     
    })}
    
     
    </div>
  );
}

export default App;