import React, { Component } from "react";
import { getBreweries } from "../redux/actions/breweryActions";
import { connect } from "react-redux";
import BreweriesListItem from "./BreweriesListItem";

class BreweriesList extends Component {
  componentDidMount() {
    this.props.getBreweries();
  }

  render() {
    return (
      <div>
        <h1>Brewery List</h1>
        {this.props.brewery.map((b) => (
          <BreweriesListItem brewery={b} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brewery: state.brewery,
  };
};

export default connect(mapStateToProps, { getBreweries })(BreweriesList);
