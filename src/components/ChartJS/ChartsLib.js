import React from 'react'
import ChartList from './ChartList';
import Horizontalchart  from './Chart-horizontal'
import './Charts.css'

const ChartsLib = () => {
  return (
    <div className='charts'>
        <div className="box">
          <ChartList />
        <Horizontalchart />
        </div>
    </div>
  )
}

export default ChartsLib