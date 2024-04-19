import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'

const Coin = () => {
  const params = useParams()
  const [coin, setCoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  useEffect(() => {
      axios.get(url).then((res) => {
          setCoin(res.data)
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  return (
    <div className='w-full h-screen '>
      <div className='max-w-[1260px] h-auto border-2 mx-auto shadow-xl shadow-cyan-500/50'>
        <h1 className='text-4xl text-center shadow-xl shadow-cyan-500/50'>{coin.name}</h1>
        <div className='flex justify-between items-center border-2 shadow-xl shadow-cyan-500/50'>
          <div className='p-5'>
            <p>Rank # {coin.market_cap_rank}</p>
            <p>{coin.image ? <img className='mx-auto' src={coin.image.small} alt='' /> : null}</p>
            <p>{coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}</p>
          </div>
          <p className='text-center text-xl'>Price {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}</p>
          <div className='grid grid-2 p-5'>
            <div className='text-center m-4'>
              <h1 className='text-xl'>Coin Change (in %)</h1>
            </div>
            <div className='flex gap-5'>
              <p>1 hour{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</p>
              <p>24 hour{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</p>
              <p>7 D{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</p>
              <p>14 D{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</p>
              <p>30 D{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</p>
              <p>1 Year{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between p-5 m-5 text-center'>
            <p className='text-xl'>Today's Low {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}</p>
            <p className='text-xl'>Today's High{coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}</p>
            <p className='text-xl'>Market Cap{coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}</p>
            <p className='text-xl'>Circulating Supply{coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}</p>
        </div>
        <div className='p-5'>
              <h3>About</h3>
              <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
              }}>
              </p>
        </div>
      </div>
      </div>
  )
}

export default Coin

  