// import React from 'react';

// debugger

// const BreweryDetails = ({brewery}) => {
//   return (
//     <div>
//       <p>{brewery.name}</p>
//     </div>
//   );
// }

// export default BreweryDetails;


import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBrewery } from "../redux/actions/breweryActions";

class BreweryDetails extends Component {
  componentDidMount() {
    this.props.getBrewery(this.props.match.params.id);
  }

  render() {
    const brewery = this.props.brewery;

    // const renderReview = brewery.reviews.map((review) => {
    //   <div>
    //     <h3>{review.name}</h3>
    //     <p>{review.comment}</p>
    //   </div>
    // })

    return (
      <div>
        <p>{brewery.name}</p>
        <p>{brewery.address}</p>
        <p>{brewery.city}, {brewery.state}</p>

        <p>Reviews</p>
        
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    brewery: state.brewery,    
  };
  debugger
};


export default connect(mapStateToProps, { getBrewery })(BreweryDetails);
