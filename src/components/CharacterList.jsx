import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  return (
    <ul>
      <li className="m-2 flex gap-2 items-center justify-between font-bold">
        <span className="w-32">Name</span>
        <span className="w-32">Gender</span>
        <span className="w-32">Culture</span>
        <span className="w-32">Alive</span>
        <span className="w-32">Allegiances</span>
      </li>
      {characters.map((character) => {
        let nameAndAliases = character.name;
        if (character.aliases.length > 1)
          nameAndAliases += ', ' + character.aliases.join(', ');
        nameAndAliases = nameAndAliases ? nameAndAliases : 'N/A';

        let yearsAlive = 0;
        if (character.born && character.died) {
          yearsAlive =
            parseInt(character.died.match(/(\d+)/)) -
            parseInt(character.born.match(/(\d+)/));
          console.log(yearsAlive);
        }
        let alive = yearsAlive
          ? character.born
            ? `No, died at ${yearsAlive} years old`
            : 'No'
          : character.born
          ? 'Yes'
          : character.died
          ? 'No'
          : 'Unknown';

        let allegiances = [];
        character.allegiances.map((a) => allegiances.push(a.match(/(\d+)/)));
        allegiances = allegiances.join(', ');
        return (
          <CharacterItem
            key={Math.random()}
            gender={character.gender}
            name={nameAndAliases}
            culture={character.culture ? character.culture : 'Unknown'}
            alive={alive}
            allegiances={allegiances}
          />
        );
      })}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      aliases: PropTypes.arrayOf(PropTypes.string),
      alive: PropTypes.string,
      gender: PropTypes.string,
      culture: PropTypes.string,
      allegiances: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default React.memo(CharacterList);
