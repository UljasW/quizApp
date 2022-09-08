import React from 'react'
import Button from 'react-bootstrap/Button';


export default function header() {
  return (
    <div style={{ height: "100px", background: "black", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <div style={{ display: "flex", with: "500px"}}>
        <Button variant="primary" className='btn'>
          Home
        </Button>
        <Button variant="primary" className='btn'>
          Create Quiz
        </Button>
        <Button variant="primary" className='btn'>
          Sign In
        </Button>
      </div>


    </div>

  )
}
