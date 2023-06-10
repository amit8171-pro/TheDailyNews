import React from 'react';
import {Link} from 'react-router-dom';



export default function Top() {
   
    // const [show, setShow] = useState(false);

    // const showloginpage = ()=>{
    //     setShow = <LoginForm/>
    // }

  return (
<>
    <section className='top'>
        <div className='container'>
        <div className='row justify-content-between align-items-center'>
            <div className='col-lg-6 '>
                <div className='top-logo d-inline'>
                    <p >Breaking News</p>                
                </div>
                <marquee width="60%" direction="left"  className='text-light marquee'>
                This is a sample scrolling text that has scrolls texts to left.
               </marquee>
                </div>
           
            <div className='col-lg-6 col-md-12 text-md-start text-lg-end   top-right'>
               <div className='d-inline-block'> <a href='/' className='btn btn-dark border-secondary-subtle language me-md-2'><img src='https://cdn-icons-png.flaticon.com/512/555/555526.png' className='me-2' alt=''/>English <i className='arrowdown'></i></a></div>
            
               <div className='d-inline-block btnform '> <Link to={`login`} className="btn btn-danger btn-sm px-3 mx-2">Login</Link>
                <a href='/' className="btn btn-primary btn-sm px-3 me-2 ">Sign Up</a></div>
               
            </div>
            </div>
 
        </div>

       
    </section>
</>
  )
}
