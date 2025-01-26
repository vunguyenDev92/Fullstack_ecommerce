import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home/index.js';
import Header from './Components/Header/index.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
