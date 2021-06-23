import React, { Component } from "react";
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Foods</div>
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortFoods}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-item">
          Filter{" "}
          <select value={this.props.item} onChange={this.props.filterFoods}>
            <option value="">All</option>
            <option value="chicken">Chicken</option>
            <option value="salad">Salad</option>
            <option value="thie">Thie</option>
            <option value="pork">Pork</option>
            <option value="salmon">Salmon</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
