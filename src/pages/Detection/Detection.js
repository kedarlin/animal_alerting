import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Detection.css'
import Landing from '../../components/Landing'
import Detect from '../../components/Detect'

const Detection = () => {
  return (
    <div className='home-container'>
      <div className='home-body-container'>
        <Sidebar />
        <div className='detection-content'>
            <Detect />
        </div>
      </div>
    </div>
  )
}

export default Detection