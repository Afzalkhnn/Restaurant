import React from 'react'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function Contact() {
  return (
    <>
    
    
    <div className='contact'>
      <h1>Serving our Restaurant</h1>
      <h1>For more than 25 years</h1>
      <div className='btn'>
      <Button variant="outline-warning">Explores</Button>
      <Button variant="outline-danger">Sales</Button>

      </div>
      
    </div>
    <div className='review'>
      <h3>What customer say about Reataurant</h3>
      <p>Hear directly from 55,000 customer how use it.</p>
      <div className='cards'>
        <div className='card'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Andrew.B</Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='card'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Kathlee.W</Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='card'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Elisa.C</Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>


      </div>

    
    </div>
    <div className='last'>
      <h3>Tell us about our Restaurant</h3>
      <p>Fill out the form below and a member of our team will contact you shortly</p>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Full Name</Form.Label>
        <Form.Control type="text" placeholder="enter your Name" className='input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" className='input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='label'>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Password</Form.Label>
        <Form.Control type="password" placeholder="password" className='input' />
      </Form.Group>
    </Form>
      <Button variant="danger" className='kk'>Submit</Button>
      <p>By clicking Submit you agree to our Privacy Policy.
You also agree to receive marketing communications from OpenTable about news, events, promotions and monthly newsletters. You can unsubscribe from OpenTable emails at any time.</p>

    </div>
    <div className='bb'>

    </div>
    
    
      
    
    </>
  )
}

export default Contact