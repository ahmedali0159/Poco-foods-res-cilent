//feature 1
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo_footer.png';
import data from '../../Data.json';
import './Food.css';
import Piece from '../Piece/Piece';

class Food extends Component {
    constructor(){
        super();
        this.state = {
            foods: data.foods,
            size: "",
            sort: ""
        };
    }
    render(){

   
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
                    <div className="content">
                        <div className="main">
                            <Piece foods={this.state.foods} />
                        </div>
                        <div className='sidebar'>
                            Cart Items
                        </div>
                    </div>
                </main>
                <footer>
                    
                </footer>
        </div>
    )
    }
}

export default Food
