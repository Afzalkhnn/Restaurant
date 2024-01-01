import Button from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';





function Home() {
  return (
    <>
    <div className='food'>
    <h1>food website</h1>
      <h4>best food in India</h4>
      <h3>order now</h3>
    
      <Link>
      <Button variant="outline-primary">Click Here</Button>
      </Link>
      
      
      

    </div>
    <div className='im'>
    <Carousel>
     <Carousel.Item interval={1000}>
       <img src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D" alt='' />
       <Carousel.Caption>
         <h3>best dish</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item interval={500}>
       <img src="https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpc2h8ZW58MHx8MHx8fDA%3D"  alt=''/>
       <Carousel.Caption>
         <h3>best dish</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D" alt='' />
       <Carousel.Caption>
         <h3>best dish</h3>
         <p>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
         </p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   </div>
   <div className='f'>
    <h5>Business</h5>
    <h5>
      city
    </h5>
    <h5>Explore</h5>
    <h5>Manage</h5>
   </div>
   </>
  )
}

export default Home

  
 