import Loader from "./pages/Loader";
import Main from "./pages/Main";
import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/loader' element={<Loader/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
