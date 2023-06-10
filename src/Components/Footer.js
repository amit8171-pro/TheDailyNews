import React, {useEffect, useState } from 'react';
import {Entertainment} from '../Data/Newdata';
import { Link } from 'react-router-dom'

export default function Footer() {
    const [data, setData]= useState([])
    useEffect(()=>{
     setData(Entertainment.filter((ent)=>ent.urlToImage!==null))
    
    }, [])
    
  return (
 <>
    <section className='footer'>
    <div className='container'>
        <div className='row justify-content-between mt-5 py-4'>
            <div className='col-md-3'>
                <img src={require('../assest/img/logo-mod.png')} alt='footer_logo'/>
                <p className='my-3 text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum, tortor vel scelerisque facilisis, ex orci faucibus metus, in laoreet nisl odio sed mauris.
                 Suspendisse rhoncus fermentum leo, eget eleifend nibh lacinia in. Aliquam nisi ex,
                  pellentesque eget augue vel, luctus semper orci. Sed a justo ipsum</p>
            </div>
            <div className='col-md-3'>
                <h4 className='text-light'>THE <span className='text-danger'>INFORMATION</span></h4>
                <ul class="list-inline text-light">
                <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> About Us</li></Link>
                <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Our Location</li></Link>
                <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Contact Us</li></Link>
                <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Archive Template</li></Link>
                <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Our Company</li></Link>
                </ul>
            </div>
            <div className='col-md-3'>
                <h4 className='text-light'>CUSTOM <span className='text-danger'>LINK</span></h4>
                <ul class="list-inline text-light">
                    <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Community Health & Wellness</li></Link>
                    <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Community Relations</li></Link>
                    <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Community Services</li></Link>
                    <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Resources</li></Link>
                    <Link to={'/'}><li class="list-inline-item"><i class="bi bi-chevron-double-right"></i> Community Reports</li></Link>
                </ul>
            </div>
            <div className='col-md-3'>  
                <h4 className='text-light'>MOST <span className='text-danger'>COMMENTED</span></h4>
                {data.slice(0,2).map((morereven)=>{
                const {title, urlToImage, url, publishedAt } = morereven;
                return(
                <div className='row justify-content-between align-self-center flex-column my-2'>
              <div className='col-md-11 pt-4'>
              <div className='row align-self-center'>
              <div className='col-md-3 mrleft'>
              <Link to={'/'}><img src={urlToImage} alt='' className='w-100'/></Link>
              </div>
              <div className='col-md-8  text-light fcomment'>
              <h4 className='frt'>{title.slice(0,30)}</h4>
              <Link to={'/'}><p><span>6 </span>comment</p></Link>
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
