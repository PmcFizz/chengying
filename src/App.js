import './App.css';
import LibItem from './components/LibItem'
import { libData } from './data'
function App() {
  return (
    <div className="App app-container">
      { libData.map(x => (<LibItem key={x.id} libdata={x} />))}
    </div>
  );
}

export default App;
