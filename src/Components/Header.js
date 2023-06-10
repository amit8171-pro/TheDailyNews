import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
         <section className='header bg-danger'>
               <div className='container py-5'>
                <div className='row justify-content-between align-items-center logoheder'>
                    <div className='col-lg-9 col-md-6 col-sm-6 '>
                        <Link to={'/'}><img src={require('../assest/img/logo.png')} className='' alt='logo'/></Link>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 text-end text-md-end'>
                    <form className='searchall'>
                   <input type="search" placeholder="Search..." />
                    <button type="submit">Search</button>
                   </form>
  
                    </div>
                </div>
               </div>

         </section>
    </>
  )
}
