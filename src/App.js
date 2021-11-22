import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Calculator from "./Pages/Calculator";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>

    // <Homepage />
    

  );
}

export default App;
