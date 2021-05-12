import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrewery } from "../redux/actions/breweryActions";
import ReviewDetails from "./ReviewDetails";

class BreweryDetails extends Component {
  componentDidMount = () => {
    this.props.getBrewery(this.props.match.params.id);
  };

  render() {
    const brewery = this.props.brewery;

    const renderReviews = this.props.brewery.reviews.map((review) => {
      <ReviewDetails review={review} />;
    });

    return (
      <div>
        <p>{brewery.name}</p>
        <p>{brewery.address}</p>
        <p>
          {brewery.city}, {brewery.state}
        </p>
        <div>
          <p>Current Reviews:</p>
          <div>{renderReviews}</div>
        </div>
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
