import React, { useState } from 'react'
import Top from '../Components/Top'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Aside from '../Components/Aside'
import Footer from '../Components/Footer'
import Alldata from '../Data/Alldata'
import { Link } from 'react-router-dom'

export default function Entertainment() {
    const [myData, setMyData] = useState(
        (Alldata.filter((ent)=>ent.category==='Entertainment'))
    
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

      {myData.slice(0,12).map((ent)=>{
      
        return(
            <div className='col-md-6 py-3'>
        <div className="card gap-3" style={{width: + '18rem'}}>
          <Link to={ent.url}><img src={ent.urlToImage} className="card-img-top w-100" alt="..."/></Link>
          <div className="card-body">
          <h5 className="card-title">{ent.title}</h5>
          <p className="card-text">{ent.description}</p>
          <Link to={ent.url} className="btn btn-primary">Read More..</Link>
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
