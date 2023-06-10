import React from 'react'
import { Link } from 'react-router-dom'

export default function Likeus() {
  return (
    <>
          <div className='likeus-component container'>
        <h4 className='my-4'>Like <span>us</span></h4>
        <hr className='thr'></hr>

        <div className='facebookapi mt-4'>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrekkingplannernepal&tabs=timeline&width=240&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="240" height="500" style={{border: + 'none'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>

        <h4 className='mt-5'>LATEST <span>TWEETS</span></h4>
        <hr className='thr'></hr>
        </div>
      
  

        
    </>
  )
}
