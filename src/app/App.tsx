import { useState } from "react";
import "./App.css";
import Events from "./event/Events";
import StoreProvider from "./context/StoreProvider";

function App() {
  return <StoreProvider></StoreProvider>;
}

export default App;
