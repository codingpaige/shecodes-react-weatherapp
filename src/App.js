import "./App.css";
import SearchBar from "./SearchBar";
import Summary from "./Summary";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <SearchBar />
            <Summary />
            <Forecast />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
