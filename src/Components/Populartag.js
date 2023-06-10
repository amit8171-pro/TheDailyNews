import React from 'react'
import { Link } from 'react-router-dom'

export default function Populartag() {
  return (
     <>
           <div className='populartag-component container'>
        <h4 className='my-4'>Popular <span>Tags</span></h4>
        <hr className='thr'></hr>
        <div className='popular-tag-content'>
        <ul className="list-inline">
              <li className="list-inline-item"><Link to={'/'}>Anniversary</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Birthday</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Cakes</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Cameras</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Electrics</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Fashion</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Shoes</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Thedaily</Link></li>
              <li className="list-inline-item"><Link to={'/'}>Woman</Link></li>
              
        </ul>
            
            
            
            
            
            
            
            
            
            

        </div>
        </div>
     </>
  )
}
