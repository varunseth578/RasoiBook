import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { MdTimer } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


export default function Recipeitems() {

  const allRecipes = useLoaderData();


  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width="120px" height="100px" />
              <div className='card-body'>
                <div className='title'>{item.title}</div>
                <div className='icons'>
                <div className='timer'> <MdTimer />30min</div>
                  <FaHeart />
                  </div>
               
              </div>

              
            </div>
          );
        })}
      </div>
    </>
  );
}
