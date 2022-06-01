import React from 'react';
import { useParams } from 'react-router-dom';

const HouseDetails = () => {
  let { id } = useParams();
  console.log(id);
  return <div>HouseDetails</div>;
};

export default HouseDetails;
