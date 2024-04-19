import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='grid grid-row sm:grid-cols-6 sm:gap-6 m-10 sm:mx-auto text-center hover:scale-105 duration-300 shadow-xl shadow-cyan-500/50'>
        <p>{props.coins.market_cap_rank}</p>
        <div className=' flex justify-between items-center'>
            <img className='h-10 w-auto mx-auto' src ={props.coins.image} alt='' />
            <p className='mx-auto'>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}</p>
        <p className='hidden md:flex'>{props.coins.total_volume.toLocaleString()}</p>
        <p className='hidden md:flex'>{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem