import React, {useEffect, useState } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { Sports } from '../Data/Newdata';

export default function Morenews() {
    const [data, setData]= useState([])
    useEffect(()=>{
     setData  (Sports.filter((m)=>m.urlToImage!=null));
    }, [])
  return (
   <>
    <section>
        <div className='container morenews'>
        <h4 className='my-5'>More <span>News</span></h4>
        <hr className='thr'></hr>
        <div className='row justify-content-between align-items-center mores my-5'>
            {data.slice(0,2).map((more)=>{
                const {title, urlToImage, url, publishedAt, content} = more;
                return(
                    <>
            <div className='col-md-6 position-relative'>
           <div className='zoomimg1 w-100'> <Link to={url} className=''><img src={urlToImage} alt='' className='w-100'/></Link>
                 <div className='moreicons'>
                 <Link to={'https://facebook.com'}><i className="bi bi-facebook ps-3"></i></Link>
                    <Link to={'https://gmail.com'}><i className="bi bi-file-plus-fill ps-3"></i></Link>
                    <Link to={'https://twitter.com'}><i className="bi bi-twitter ps-3"></i></Link>
                    <Link to={'https://linkedin.com'}><i className="bi bi-linkedin ps-3"></i></Link>
                 </div>
            </div>
            
            <h4 className='pt-4'>{title}</h4>
                <p className='dateandtime'>{publishedAt} By Published in <span><Link to={'/'}>Trending Now</Link></span> <i className="bi bi-eye-fill"></i> 1081 Hits</p>
                <p className='dtls'>{content}</p>
               
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
