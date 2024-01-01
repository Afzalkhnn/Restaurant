import React from 'react'
import './About.css'
import Carousel from 'react-bootstrap/Carousel';





function About() {
  return (
    <>
    <div className='about'>
      <h1>MY Restaurant</h1>
      <img src='https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
    </div>
    <div className='hd'>
      <p>My Restaurant is a family owned and operated upscale, yet casual dining restaurant with New American Style scratch-made food, along with some traditional comfort favorites, daily fresh seafood, prime steaks, a well-rounded wine list, and Old Fashioned bar with 400+ whiskies. Our high level of service presents opportunity for a higher level of compensation for our team. Federal strives to positively impact as many lives as possible every single day. We go above and beyond to WOW our guests and that starts by taking care of the staff! As a rapidly growing company we have vast opportunities for advancement for anyone who shares our core values. 

<br></br>Company Website: Myresturent.com</p>

    </div>
    <div className='image'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.webp?b=1&s=170667a&w=0&k=20&c=ae-29IvyAog_Bth2OhAWLvsIs_Ry7wY5wBgk3UfqvAM="
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>

  <div className='footer'>
      <h3>corperate</h3>
      <h3>privacy</h3>
      <h3>Terms</h3>
      <h3>Sitemap</h3>




    </div>
  </>
  )
}

export default About