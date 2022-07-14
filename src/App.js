import Header from "./components/Header";
import News from "./components/News";
import "./App.css";
import { useState } from "react";

function App() {

  const[pageSize,setpageSize]=useState(8);

  return (
    <>
      <Header company="NewsMonkey" />
      <News pageSize={pageSize} setpageSize={setpageSize}/>
    </>
  );
}

export default App;
