import React, { Component } from "react";
import { getBreweries } from "../redux/actions/breweryActions";
import {getOpenBreweries} from '../redux/actions/breweryApiAction'
import { connect } from "react-redux";

class BreweriesList extends Component {
  componentDidMount() {
    this.props.getOpenBreweries();
  }

  

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

export default connect(mapStateToProps, { getOpenBreweries })(BreweriesList);
