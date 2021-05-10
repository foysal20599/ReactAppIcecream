import './App.css';
import Spread from "./components/Sprading";
import Reset from "./components/Reset";
import Push from "./components/push";
import Splice from "./components/Splice";
import Slice from "./components/slice";
import Map from "./components/map";


function App() {
  return (
    <div className="App">
      <Spread />
        <Reset />
        <Push />
      <Splice />
        <Slice />
        <Map />
    </div>
  );
}

export default App;
