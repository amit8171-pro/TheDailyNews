import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Genaral from '../Data/Newdata';


export default function Hero() {

   let general = Genaral.filter((a)=>(a.urlToImage!=null))
    


  return (
 <>
    <section className='heroowl'>
        <div className='container '>
        
       
        <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={true}  nav> 
       
            <div className='row justify-content-between align-items-center'>
            <div className='col-12'>
                <div className='row '>
                {general.slice(0,6).map((post)=>{
                    const {urlToImage} = post
                    return(
                        <div className='items1 col-4 py-4'>
                            <img src={urlToImage} alt='' className='w-100'/>
                            
                        </div>
                    )

                })}
                </div>
            </div>
             
            </div>
       
           

        </OwlCarousel>

        </div>
    </section>
 </>
  )
}
