import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';
import Link from '@mui/material/Link';


function Footer() {

  return (
    <div >
    {/* <h1>
    this is footers
    </h1> */}
    <footer className='footer-first'>
      
     
      <Box className='container-1'>

         <Box className='row new-class'>
             <Box className="footer-col">
                <h4 className='col-first'>Ayurvedic Therapies</h4>
                <ul className="list-1">
                <li className="link" >Abhyangam</li>
                <li className="link" >Steaming</li>
                <li className="link" >Sirodhara</li>
                <li className="link" >Lepanam</li>
                <li className="link" >Sarvanga Dhara</li>
                <li className="link" >KatiVasti</li>
                <li className="link" >Januvasti</li>
                </ul> 
             </Box>
             <Box className="footer-col">
                <h4 className='col-first'>Bundle Messages (Kizhi)</h4>
                <ul className="list-1">
                  <li className="link">Choornapinda swedam</li>
                  <li className="link">Patrapinda swedam</li>
                  <li className="link">Shashtikasalipinda swedam</li>
                </ul> 
             </Box>
             <Box className="footer-col">
                <h4 className='col-first'>Panchakarma Treatments</h4>
                <ul className="list-1">
                  <li>Vamana</li>
                  <li>Virechana</li>
                  <li>Nasyam</li>
                  <li>Vasti</li>
                  <li>Raktamoksham</li>
                </ul> 
             </Box>
             <Box className="footer-col">
                <h4 className='col-first'>Diseases & Treatments</h4>
                <ul className="list-1">
                  <li>Arthritis</li>
                  <li>Osteoarthritis</li>
                  <li>Gout</li>
                  <li>Rheumatoid Arthritis</li>
                  <li>Spondyloarthritis and Ankylosing Spondylitis</li>
                  <li>Osteoporosis</li>
                  <li>Back Pain, Disk Bulging</li>
                </ul> 
             </Box>
         </Box>
      </Box>
    </footer>
    <footer className='footer'>
      {/* <h1>this is a navbar</h1> */}
      <Box className=''>
          <Box className='row'>
             <Box className='footer-col'>
               <h4>Quick Links</h4>
               <ul className='list'>
                  <li><Link className="link" href="#">Home</Link></li>
                  <li><Link className="link" href="#">About Us</Link></li>
                  <li><Link className="link" href="#">Ayurvedic Therapies</Link></li>
                  <li><Link className="link" href="#">Diseases & Treatments</Link></li>
                  <li><Link className="link" href="#">Membership</Link></li>
                  <li><Link className="link" href="#">Blogs</Link></li>
              </ul>
             </Box>
             <Box className='footer-col'>
               <h4>Policies</h4>
               <ul className='list'>
                  <li><Link className="link" href="#">Terms & Conditions</Link></li>
                  <li><Link className="link" href="#">Privacy Policies</Link></li>
                  <li><Link className="link" href="#">FAQ</Link></li>
                  <li><Link className="link" href="#">Refund Policy</Link></li>
                  <li><Link className="link" href="#">Disclaimer</Link></li>
               </ul>
             </Box>
             <Box className='footer-col'>
               <h4>Contact Us</h4>
               <ul className='list'>
                  <li>Call Now: +91-9811669606 /</li>
                  <li>+91-9810781909</li>
                  <li>Email: info@vedanta-wellness.com</li>
                  <li>Address: Vedanta Wellness, C-11,</li>
                  <li>Sector-56, Noida, India</li>
               </ul>
             </Box> <Box className='footer-col'>
               <h4>Reach Us</h4>
                 <ul className='list'>
                  <li>tdfhd</li>
               </ul>
             </Box>
          </Box>
      </Box>
    </footer>
    <hr className="hr" />
    <p className="footer-last">© Copyright 2022 - Vedanta Wellness. All rights reserved</p>
    </div>
  )
}

export default Footer