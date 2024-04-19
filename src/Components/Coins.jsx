import React from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../Routes/Coin'

const Coins = (props) => {
  return (
    <div className='w-full h-full mx-auto'>
        <div className='max-w-[1140px] m-auto'>
            <div className='grid grid-cols-4 sm:grid-cols-6 sm:gap-6 text-center border-white border-2 shadow-xl shadow-cyan-500/50'>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24H</p>
                <p className='hidden md:grid'>Volume</p> 
                <p className='hidden md:grid'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return(
                    <Link to={`/coin/${coins.id}`} key= {coins.id}>
                        <CoinItem coins={coins}/>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Coins