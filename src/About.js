// import React, { useContext } from 'react'  // comment if use custome hook
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontext';
// import { AppContext } from "./context/productcontext";   // comment if use custome hook

const About = () => {

  // const myName = useContext(AppContext);   // comment if use custome hook
  const { myName } = useProductContext();


  const data = {
    name:"Ali Ecommerce store",
  }
//////////////////////  Props Pass //////////////////
  return (
  <>
    {myName}
   <HeroSection myData={data}/>
   </>
   )
}

export default About
