import React from 'react'
import "./FooterComponent.css"

const FooterComponent = () => {
  return (
     <div className="Footer">

      <div className='footer-sides'>

      <div className='first-side'>


     
      <div className='right-footer'>
      <div className="logo">
        <img src="Logo.png" alt="" />
        <div className="logo-text">
          <h4>Trek</h4>
         
        </div>
         </div>
         <p>There are many variations of passages of available but it is the majority of suffered that a alteration in that some dummy text.</p>
       
       

        </div>

        

        <div className='about'>
          <h4>About</h4>
          <ul>
            <li>Discover</li>
             <li>Find Travel</li>
              <li>Popular Destinations</li>
              <li>Reviews</li>
              
          </ul>
          </div>

           </div>

           <div className='second-side'>


        <div className='support'>
          <h4>Support</h4>
          <ul>
            <li>Customer Support</li>
              <li>Privacy and policy</li>
                <li>Contact channels</li>
          </ul>
        </div>


        <div className='community'>
          <h4>JOIN OUR COMMUNITY🔥</h4>
          <ul>
            <li><button className='enter-email'>Enter your email </button></li>
          </ul>
          </div>
    </div>

    </div>

    </div>
  )
}

export default FooterComponent
