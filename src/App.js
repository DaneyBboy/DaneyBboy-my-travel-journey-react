import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import data from './Data'

function App() {

  const card = data.map((items)=>    
      <Main 
      item = {items} />  
    
  )
  
  return (
    <div className="App">
      
      <Header />
      {card}
      
    </div>
  );
}

export default App;
