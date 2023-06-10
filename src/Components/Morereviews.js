import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Health } from '../Data/Newdata';
import {Entertainment} from '../Data/Newdata';

export default function Morereviews() {
    const [data, setData]= useState([])
    useEffect(()=>{
     setData(Health.filter((mr)=>mr.name==="Plant Based News"))
    
    }, [])
    let ent = Entertainment.filter((ent)=>ent.urlToImage!==null)
    
   
  

  return (
 <>
    <section>
        <div className='container reviews'>
        <h2 className='my-5'>More<span> Reviews</span></h2>
        <hr className='thr'></hr>
        <div className='row justify-content-between align-items-center'>
        {data.slice(0,1).map((morerev)=>{
                const {title, urlToImage, url } = morerev;
          return(
            <div className='col-md-6 mrrignt'>
              <Link to={url}><img src={urlToImage} alt='' className='w-100'/></Link>
              <h5>{title}</h5>
            </div>
          )
              
        })}
        <div className='col-md-6 col-sm-12'>
        {ent.slice(0,4).map((morereven)=>{
                const {title, urlToImage, url, publishedAt } = morereven;
                return(
           
              <div className='row justify-content-between align-self-center flex-column my-2'>
              <div className='col-md-11 col-sm-6'>
              <div className='row'>
              <div className='col-md-4 col-sm-4 mrleft'>
              <img src={urlToImage} alt='' className='w-100'/>
              </div>
              <div className='col-md-8 col-sm-8'>
              <h4 className='mrt'>{title.slice(0,30)}</h4>
              <p>{publishedAt}</p>
              </div>
           
              
              </div>
              </div>
              </div>
          
        )
        })}
        </div>
        </div>
        </div>
    </section>

 </>
  )
}
