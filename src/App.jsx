import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Items />
    </div>
  );
}

export default App;
