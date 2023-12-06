import "./App.css";
import SearchBar from "./SearchBar";
import Summary from "./Summary";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <Summary />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
