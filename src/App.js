import GlobalStyles from "./GlobalStyles";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <GlobalStyles/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
