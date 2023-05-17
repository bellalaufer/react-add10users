import React from 'react';


function Navbar({addUsers}) {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">ADD USERS</a>
          <ul className="right hide-on-med-and-down">            
            <li><a onClick={() => addUsers()} className="waves-effect waves-light btn-large">Add</a></li>
          </ul>
        </div>
    </nav>
    );
}

export default Navbar;