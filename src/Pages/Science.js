import React, { useState } from 'react'
import Top from '../Components/Top'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Aside from '../Components/Aside'
import Footer from '../Components/Footer'
import Alldata from '../Data/Alldata'
import { Link } from 'react-router-dom'

export default function Science() {
    const [myData, setMyData] = useState(
        (Alldata.filter((sci)=>sci.category==='Science' && sci.urlToImage!== null))
    
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

      {myData.slice(0,12).map((sci)=>{
      
        return(
            <div className='col-md-6 py-3'>
        <div className="card gap-3" style={{width: + '18rem'}}>
          <Link to={sci.url}><img src={sci.urlToImage} className="card-img-top " alt="..."/></Link>
          <div className="card-body">
          <h5 className="card-title">{sci.title}</h5>
          <p className="card-text">{sci.description.slice(0, 100)}</p>
          <Link to={sci.url} className="btn btn-primary">Read More..</Link>
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
