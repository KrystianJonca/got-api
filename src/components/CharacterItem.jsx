import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
const CharacterItem = ({ name, alive, gender, culture, allegiances }) => {
  let url = allegiances.split(',')[0];

  if (!url)
    return (
      <li className="m-2 p-1 flex gap-2 items-center justify-between cursor-pointer hover:bg-black hover:bg-opacity-30">
        <span className="w-32">{name}</span>
        <span className="w-32">{gender}</span>
        <span className="w-32">{culture}</span>
        <span className="w-32">{alive}</span>
        <span className="w-32">{allegiances}</span>
      </li>
    );

  return (
    <Link to={`/house/${url}`}>
      <li className="m-2 p-1 flex gap-2 items-center justify-between cursor-pointer hover:bg-black hover:bg-opacity-30">
        <span className="w-32">{name}</span>
        <span className="w-32">{gender}</span>
        <span className="w-32">{culture}</span>
        <span className="w-32">{alive}</span>
        <span className="w-32">{allegiances}</span>
      </li>
    </Link>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string,
  alive: PropTypes.string,
  gender: PropTypes.string,
  culture: PropTypes.string,
  allegiances: PropTypes.string,
};

export default CharacterItem;
