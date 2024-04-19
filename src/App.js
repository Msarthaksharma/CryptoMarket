import axios from "axios";
import { useEffect, useState } from "react";
import Coins from "./Components/Coins";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from './Routes/Coin'


function App() {
 
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  const [coins,setCoins] = useState([])

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins (response.data)
      console.log(response.data[0])
    }).catch((error)=>{
      console.log(error)
    })
  }, [])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Coins coins={coins}/>}/>
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
