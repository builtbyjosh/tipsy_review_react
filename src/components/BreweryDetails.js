import React from 'react';

const BreweryDetails = ({brewery}) => {
  return (
    <div on>
      <p>{brewery.name}</p>
      <p>{brewery.website_url}</p>
    </div>
  );
}

export default BreweryDetails;
