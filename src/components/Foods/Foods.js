import React, { Component } from 'react';
import './Foods.css';

class Foods extends Component {
    render() {
        return (
            <div>
                <ul className="pieces">
                    {this.props.foods.map((food) => (
                        <li key={food._id}>
                            <div className="piece">
                                <a style={{textDecoration: 'none'}} href={"#" + food._id}>
                                    <img src={food.image} alt={food.title}/>
                                    <p style={{fontSize: '1.2rem', color: 'black', textAlign:'center'}}>
                                        {food.title}
                                    </p>
                                </a>
                                <div className="piece-price">
                                    <div>
                                        {food.price}
                                    </div>
                                    <button onClick={() => this.props.addToCart()} className="button primary">
                                        Add To Card
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Foods;