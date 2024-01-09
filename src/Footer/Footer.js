import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
//  <link rel=" stylesheet"
// href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
// integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
// crossorigin="anonymous" referrerpolicy="no-referrer"/>
export default function Footer() {
  return (
    <div>
       <footer>
        <div class="container">
            <div class="footer-content">
                <h3>Contact Us</h3>
                <p>Email:disha455@gmail.com</p>
                <p>Phone:9319800157</p>
                <p>Free sources to learn new languages <Link to = "/profile">here</Link></p>
                <p><Link to = "/feedback">feedback</Link></p>


    
            </div>
            <div class="footer-content">
                <h3>Quick links</h3>
                <ul class="list">
                <li><a href="">Home</a></li>
                <li><Link to = "/about">About</Link></li>
                <li><a href="">services</a></li>
                <li><a href="">Contact</a></li>
                </ul>
                <hr />
                
            </div>
            <div class="footer-content">
              <h3>Follow us on</h3>
                <ul class="social-icons">
                <li>LINKTREE</li>
            </ul>

            </div>
            <div class="help-num">Helpline numbers:</div>
            <div class="help-num1">
              <p>Women Helpline:(011)23317004</p>
              <p>Traffic police:25844444</p>
              <p>Fire Services:+91-11-26445230</p>
              <p>Hospitals:08046110007</p>
            </div>
          

            
        </div>
        
        <div class="bottom-bar">
            <p> &copy; 2023 Disha.All rights</p>
        </div>

    </footer>


    </div>
  )
}
