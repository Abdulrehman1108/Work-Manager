'use-client';
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='h-40 mt-5 bg-blue-600'>
      <div className='flex justify-around p-4'>
        <div className='flex flex-col justify-center text-center'>
          <h1 className='text-2xl'>Welcome to work Manager</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='text-center'>
          <h1>Important Links</h1>
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href=""></a>Instagram</li>
            <li><a href=""></a>Linkdin</li>
          </ul>
        </div>
      </div>
      
      </footer>
    </>  
  )
}

export default Footer
