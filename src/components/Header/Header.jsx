import React from 'react'
import dncLogo from "../../assets/logo-dnc.png";
import './index.scss'

const Header = () => {
  return (
    <div className='header'>
    <img src={dncLogo} alt="DNC logo" />
    </div>
  )
}

export default Header