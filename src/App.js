import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";
import SecondPage from "./pages/second";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<MainPage title="CD" day="20.04.2023" />}/>
          <Route path="/main" element={<SecondPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
