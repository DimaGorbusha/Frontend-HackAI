import Loader from "./pages/Loader";
import Main from "./pages/Main";
import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-bg">
      <Main/>
      <Loader/>
      <Result/>
    </div>
  );
}

export default App;
