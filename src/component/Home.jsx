import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Home = () => {
  const {state} = useLocation();
  console.log(state)
  return (
    <h1 className='home mt-5'>My name is Rakesh </h1>
  )
}
export default Home;
