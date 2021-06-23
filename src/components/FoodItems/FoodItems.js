//feature 1
import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo_footer.png";
import data from "../../Data.json";
import Foods from "../Foods/Foods";
import "./FoodItems.css";
import Filter from "../Filter/Filter";

class FoodItems extends Component {
  constructor() {
    super();
    this.state = {
      foods: data.foods,
      item: "",
      sort: "",
    };
  }
  sortFoods = (event) => {
    //implement
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      foods: this.state.foods
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterFoods = (event) => {
    //implement
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ item: event.target.value, foods: data.foods });
    } else {
      this.setState({
        item: event.target.value,
        foods: data.foods.filter(
          (food) => food.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <nav className="navbar navbar-expand navbar-light bg-white py-2">
          <div className="container">
            <Link to="/" className="navbar-brand">
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
              <Filter
                count={this.state.foods.length}
                item={this.state.item}
                sort={this.state.sort}
                filterFoods={this.filterFoods}
                sortFoods={this.sortFoods}
              />
              <Foods foods={this.state.foods} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default FoodItems;
