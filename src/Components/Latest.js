import React, {useEffect, useState } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { Technology } from '../Data/Newdata';

export default function Latest() {

    const [data, setData]= useState([])
   useEffect(()=>{
    setData  (Technology.filter((l)=>l.urlToImage!=null));
   }, [])
 

  return (
   <>
    <section>
        <div className='container letes'>
        <h4 className='my-5'>latest <span>News</span></h4>
        <hr className='thr'></hr>
       
    
            <div className='row justify-content-between align-items-center latest my-5'>
            {data.slice(0,3).map((latest)=>{
                const {title, urlToImage, url, publishedAt, content} = latest;
                return(
                    <>
            <div className='col-md-3 zoomimg'>
            <Link to={url}><img src={urlToImage} alt='' className='w-100'/></Link>
               
            </div>
            <div className='col-md-9 py-3'>
                <h4>{title}</h4>
                <p className='dateandtime'>{publishedAt} By Published in <span><Link to={'/'}>Trending Now</Link></span> <i className="bi bi-eye-fill"></i> 1081 Hits</p>
                <p className='dtls'>{content}</p>
                <div className='row align-items-center'>
                    <div className='col-md-10'>
                    <hr className='shr'/>
                    </div>
                    <div className='col-md-2 icons'>
                    <Link to={'https://facebook.com'}><i className="bi bi-facebook ps-3"></i></Link>
                    <Link to={'https://gmail.com'}><i className="bi bi-file-plus-fill ps-3"></i></Link>
                    <Link to={'https://twitter.com'}><i className="bi bi-twitter ps-3"></i></Link>
                    <Link to={'https://linkedin.com'}><i className="bi bi-linkedin ps-3"></i></Link>
      
                    </div>
            
            
              </div>
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
