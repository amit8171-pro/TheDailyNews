import React, {useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { Health } from '../Data/Newdata';
  
export default function Photogallary() {
    const [data, setData]= useState([])
    useEffect(()=>{
     setData(Health.filter((h)=>h.name==="Plant Based News"))
    }, [])
 
  return (
   <>
     <section>
        <div className='container gallary'>
        <h4 className='my-5'>Photo <span>Gallary</span></h4>
        <hr className='thr'></hr>
       
  
            <div className='row justify-content-between align-items-center py-2'>
            {data.map((photogal)=>{
                const {title, urlToImage, url } = photogal;

                return(   
                    <> 
                     <div className='col-md-6 gallary-item '>
                    <Link to={url}><img src={urlToImage} alt='' className='w-100'/></Link>
                    <h5>{title.slice(0,60)}</h5>
               
                </div>
                </> 
                )
            
            })}
           
              
          
           
            </div>
        
        
        </div>
    </section>
   </>
  )
}
