import React, { Component } from "react";
import { getBreweries } from "../redux/actions/breweryActions";
import { connect } from "react-redux";

class BreweriesList extends Component {
  render() {
    return (
      <div>
        <h1>Brewery List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brewery: state.brewery,
  };
};

export default connect(mapStateToProps)(BreweriesList);
