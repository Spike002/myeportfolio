import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <div className="toggleNav">
            <label for="toggle"><i class="fa fa-bars"></i></label>
      </div>

      <input type="checkbox" id="toggle" name="" value=""/>
       <div className="navbar">
            <a><Link to='/'>Experience</Link></a>
            <a><Link to='/projects'>Projects</Link></a>
            <a><Link to='education'>Education</Link></a>

       </div>

     </div>
  );
}

export default Header;
