import React, { Component } from "react";
import { connect } from "react-redux";
import { getReviews } from "../redux/actions/reviewActions";
import ReviewListItem from "./ReviewListItem";

class ReviewList extends Component {
  componentDidMount() {
    this.props.getReviews();
  }

  render() {
    return (
      <div>
        {this.props.review.map((brewery) => {<ReviewListItem review={review} />})}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    review: state.review,
  };
};

export default connect(mapStateToProps, { getReviews })(ReviewList);
