import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <div className="desktopMenu">
        <Navbar />
      </div>
      <Items />
    </div>
  );
}

export default App;
