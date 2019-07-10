import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(

     <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto">
              <a class="nav-item nav-link"><Link to='/'>Experience</Link></a>
              <a class="nav-item nav-link"><Link to='/projects'>Projects</Link></a>
              <a class="nav-item nav-link"><Link to='education'>Education</Link></a>
            </ul>
          </div>
        </nav>
    </div>

  );
}

export default Header;
