import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { checkUserLogin } from '../services'

const Home = ({onLogout}) => {

  useEffect(()=>{
    checkUserLogin()
  },[])

  return (
    <div>
        <Navbar onLogout={onLogout}/>
        <div className='center-content' >
            Home
        </div>
    </div>
  )
}

export default Home
