import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchHouse from '../api/fetchHouse';

const HouseDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const house = await fetchHouse(id);
      setData(house);
      console.log(house);
      setIsLoading(false);
    };
    fetchData();
  }, [setData, id]);

  return (
    <div>
      <h1 className="text-center text-2xl">House Details</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="m-2 truncate ...">{JSON.stringify(data)}</div>
      )}
      <p>TODO: Format Data</p>
    </div>
  );
};

export default HouseDetails;
