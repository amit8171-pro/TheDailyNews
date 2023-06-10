import React, {useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { Technology } from '../Data/Newdata';

export default function Trending() {

    const [data, setData]= useState([])
   useEffect(()=>{
    setData  (Technology.filter((t)=>t.urlToImage!=null));
   }, [])
 

  return (
   <>
    <section>
        <div className='container trend'>
        <h4 className='my-5'>trending <span>News</span></h4>
        <hr className='thr'></hr>
       
        <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={true}  nav>
            <div className='row justify-content-between align-items-center '>
            {data.slice(0,3).map((trending)=>{
                const {title, urlToImage, url } = trending;

                return(     
                     <div className='col-md-4 trending-item flex-row'>
                    <Link to={url}><img src={urlToImage} alt='' className='w-100'/></Link>
                    <h5>{title.slice(0,80)}</h5>
                </div>
                )
            
            })}
            </div>
            </OwlCarousel>
        
        </div>
    </section>
   </>
  )
}
