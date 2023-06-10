import React, {useEffect, useState } from 'react';
import {Science} from '../Data/Newdata';
import { Sports } from '../Data/Newdata';
import { Link } from 'react-router-dom'

export default function Popular() {
    const [data, setData]= useState([])
    useEffect(()=>{
     setData(Science.filter((sce)=>sce.urlToImage!==null || sce.title!==null))
    
    }, [])
    const [spotData, setSpotData]= useState([])
    useEffect(()=>{
     setSpotData(Sports.filter((spo)=>spo.urlToImage!==null || spo.title!==null))
    
    }, [])
   const [show, setShow] = useState(1)

   const showTab =(e)=>{
    setShow(e)
   }
  

   
  return (
    <section className='top-aside'>
        <ul className="list-inline my-5 text-center">
        <li className={show===1 ? "btn btn-danger-active btn btn-secondary me-1": "btn btn-secondary me-1"} onClick={()=>showTab(1)}>popular</li>
            <li className={show===2 ? "btn btn-danger-active btn btn-secondary me-1": "btn btn-secondary me-1"} onClick={()=>showTab(2)}>recent</li>
            <li className={show===3 ? "btn btn-danger-active btn btn-secondary ": "btn btn-secondary "} onClick={()=>showTab(3)}>comment</li>
        </ul>

        <div className={show === 1 ? "populor-active" : "populor"}>
        {data.slice(0,5).map((popular)=>{
                const {title, urlToImage, url, publishedAt } = popular;
                return(
           
              <div className='row justify-content-between align-self-center flex-column my-2'>
              <div className='col-md-11 col-sm-12'>
              <div className='row populor-item'>
              <div className='col-md-4 prleft'>
              <Link to={url}><img src={urlToImage} alt='' className='w-100'/></Link>
              </div>
              <div className='col-md-8 '>
              <h4 className='prt'>{title.slice(0,30)}</h4>
              <p>{publishedAt}</p>
              </div>
           
              
              </div>
              </div>
              </div>
          
        )
        })}
        </div>
        <div className={show === 2 ? "populor-active" : "populor"}>
        {spotData.slice(0,5).map((popular)=>{
                const {title, urlToImage, url, publishedAt } = popular;
                return(
           
              <div className='row justify-content-between align-self-center flex-column my-2 '>
              <div className='col-11 '>
              <div className='row populor-item'>
              <div className='col-md-4 prleft'>
              <Link to={url}><img src={urlToImage} alt='img not available' className='w-100'/></Link>
              </div>
              <div className='col-md-8 '>
              <h4 className='prt'>{title.slice(0,30)}</h4>
              <p>{publishedAt}</p>
              </div>
           
              
              </div>
              </div>
              </div>
          
        )
        })}
        </div>
        <div className={show === 3 ? "populor-active " : "populor"}>
        {spotData.slice(0,5).map((popular)=>{
                const {title, urlToImage, url, publishedAt } = popular;
                return(
           
              <div className='row justify-content-between align-self-center flex-column my-2 '>
              <div className='col-11 '>
              <div className='row populor-item'>
              <div className='col-md-4 prleft'>
              <Link to={url}><img src={urlToImage} alt='img not available' className='w-100'/></Link>
              </div>
              <div className='col-md-8 '>
              <h4 className='prt'>{title.slice(0,30)}</h4>
              <p>{publishedAt}</p>
              </div>
           
              
              </div>
              </div>
              </div>
          
        )
        })}
      
        </div>
        <div className='bannar'>
        <img src={require('../assest/img/banner.png')} alt=''/>
      </div>

      <div className='newsletter form'>
        <h1>newsletter</h1>
        <p>Join the 12,000+ others and subscribe to the newsletter. Get all latest news</p>
        <input type='email' name='email' placeholder='Enter your Email'/>
        <button className='btn btn-danger'><i class="bi bi-cursor"></i></button>
      </div>


     

    
    </section>
  )
}
