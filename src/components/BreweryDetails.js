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
    
    return (
      <div>
        <p>{this.props.brewery.name}</p>
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
