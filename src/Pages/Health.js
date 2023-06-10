import React, { useState } from 'react'
import Top from '../Components/Top'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Aside from '../Components/Aside'
import Footer from '../Components/Footer'
import Alldata from '../Data/Alldata'
import { Link } from 'react-router-dom'

export default function Health() {
    const [myData, setMyData] = useState(
        (Alldata.filter((hlt)=>hlt.category==='Health' && hlt.urlToImage!== null))
    
    );


  return (
    <>
    <section>
    <Top/>
   <Header/>
   <Nav/>
   <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-9 my-5 business-page'>
      <div className='row justify-content-between align-items-center py-3'>

      {myData.slice(0,12).map((hlt)=>{
      
        return(
            <div className='col-md-6 d-flex py-3'>
        <div className="card gap-3" style={{width: + '18rem'}}>
          <Link to={hlt.url}><img src={hlt.urlToImage} className="card-img-top w-100" alt="..."/></Link>
          <div className="card-body">
          <h5 className="card-title">{hlt.title}</h5>
          <p className="card-text">{hlt.description}</p>
          <Link to={hlt.url} className="btn btn-primary">Read More..</Link>
         </div>
        </div>
            </div>

        )
      })}
       

      </div>
         
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
