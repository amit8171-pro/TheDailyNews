import React from 'react'
import Top from '../Components/Top';
import '../scss/style.scss';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Trending from '../Components/Trending';
import Latest from '../Components/Latest';
import Morenews from '../Components/Morenews';
import Photogallary from '../Components/Photogallary';
import Morereviews from '../Components/Morereviews';
import Footer from '../Components/Footer';
import Aside from '../Components/Aside';




export default function Home() {
  return (
   <>
   <section>

   <Top/>
   <Header/>
   <Nav/>
   <Hero/>
   <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-9'>
           <Trending/>
           <Latest/>
           <Morenews/>
           <Photogallary/>
           <Morereviews/>
      </div>
      <div className='col-md-3'>
      <Aside/>
      </div>
    </div>
    </div>
 
    
  


   <Footer/>
   </section>


</>
   
  )
}
