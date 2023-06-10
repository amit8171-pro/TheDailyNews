import React, { useEffect, useState } from 'react';
import Alldata from '../Data/Alldata';
import { Link } from 'react-router-dom';

export default function Category() {
    const categoname = [
                      {"id":"101", "catnm":"Business"},
                      {"id":"102", "catnm":"Entertainment"},
                      {"id":"103", "catnm":"Health"},
                      {"id":"104", "catnm":"Science"},
                      {"id":"105", "catnm":"Sports"},
                      {"id":"105", "catnm":"Technology"},
                  ]

    const [ set, setName] = useState([]);
    useEffect(()=>{
        setName(categoname.filter((csn)=>csn.catnm))

    }, [])

    const [length, setLength] = useState(
        (Alldata.filter((catlength)=>catlength.category==="Business")).length
    );

    

  return (
    <>
    
        <div className='cetegory-component container'>
        <h4 className='my-4'>ALL <span>CATEGORIES</span></h4>
        <hr className='thr'></hr>
        {set.map((categoryName)=>{
            return(
            <div className='row justify-content-between align-items-center'>
                <div className='col-6 cat-item'>
                <p>{categoryName.catnm} 
              
                    <span>({length})</span>

             

              </p>
                <hr></hr>
                </div>
                
            </div>
            )
        })}
        </div>
        
  

    </>
  )
}
