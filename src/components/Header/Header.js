import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo_footer.png';

function Header() {
    return (
       <nav className="navbar navbar-expand navbar-light bg-white py-2">
           <div className="container">
                <Link to='/' className="navbar-brand">
                    <img src={logo} alt="" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link to="/food" className="nav-link">Food Item</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                           <button style={{background:"#00A850"}} className="btn btn-rounded">Sign Up</button>
                        </Link>
                    </li>
                </ul>
           </div>
       </nav>
    )
}

export default Header
