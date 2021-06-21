//feature 1
import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../images/logo_footer.png';

function Food() {
    return (
        <div className="grid-container">
            <nav className="navbar navbar-expand navbar-light bg-white py-2">
           <div className="container">
                <Link to='/' className="navbar-brand">
                    <img src={logo} alt="" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link className="nav-link">Admin</Link>
                    </li>
                    </ul>
                </div>
                </nav>
                <main>
                    Food List
                </main>
                <footer>
                    
                </footer>
        </div>
    )
}

export default Food
