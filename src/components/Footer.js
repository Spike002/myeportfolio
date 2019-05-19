import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(

    <div>
      <footer>
          <div class="container">
               <div class="content-wrap">
                    <div class="row center-xs center-sm center-md center-lg">
                         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                              <h6>Eportfolio</h6>
                              <ul>
                                   <li><Link to='/'>Experience</Link></li>
                                   <li><Link to='/projects'>Projects</Link></li>
                                   <li><Link to='education'>Education</Link></li>
                              </ul>
                         </div>
                         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                              <h6>Contact</h6>
                              <ul>
                                   <li><a href="https://www.linkedin.com/in/soravath" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                   <li><a href="https://github.com/Spike002" target="_blank"><i class="fab fa-github-square"></i></a></li>
                              </ul>
                         </div>
                    </div>
               </div>

          </div>

      </footer>

    </div>
  );
}



export default Footer;
