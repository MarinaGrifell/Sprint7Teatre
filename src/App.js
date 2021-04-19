import Linia from './linia'
import linies from './linies.json'

function App() {
  return (
    <div className="App">
    {linies.map((item)=> {
      return (
      
         
      
         <Linia title={item}></Linia>
      
      )
    })}
     
    </div>
  );
}

export default App;