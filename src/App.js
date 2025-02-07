import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home/index.js';
import Header from './Components/Header/index.js';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const MyContext = createContext();


function App() {
  const [provinceList, setProvinceList] = useState([]);
  const [selectProvince, setSelectProvince] = useState('');

  useEffect(() => {
    getProvinceList("https://provinces.open-api.vn/api/");
  }, [])

  const getProvinceList = async (url) => {
    const response = await axios.get(url).then((res) => {
      setProvinceList(res.data);
      console.log(res.data);
    });
  }
  const values = {
    provinceList,
    selectProvince,
    setSelectProvince
  };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
