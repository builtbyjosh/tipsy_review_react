import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrewery } from "../redux/actions/breweryActions";
import ReviewDetails from "./ReviewListItem";

class BreweryDetails extends Component {
  componentDidMount = () => {
    this.props.getBrewery(this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <p>{this.props.brewery.name}</p>
        <p>{this.props.brewery.address}</p>
        <p>
          {this.props.brewery.city}, {this.props.brewery.state}
        </p>
        <p>Current Reviews:</p>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brewery: state.brewery,
  };
};

export default connect(mapStateToProps, { getBrewery })(BreweryDetails);
