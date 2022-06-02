import React from 'react';
import CharacterList from '../components/CharacterList';
import useCharactersPagination, {
  genderOptions,
  pageSizeOptions,
} from '../hooks/useCharactersPagination';

const CharactersTable = () => {
  const {
    characters,
    isLoading,
    error,
    page,
    maxPage,
    nextPage,
    prevPage,
    pageSize,
    handlePageSizeChange,
    gender,
    handleGenderChange,
    culture,
    handleCultureChange,
  } = useCharactersPagination();

  return (
    <>
      <h2 className="text-2xl text-center m-2">Table of Characters</h2>
      <form className="flex justify-between flex-wrap m-4">
        <label htmlFor="gender">
          Character Gender:
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            className="border m-1"
          >
            {genderOptions.map((g) => {
              return (
                <option key={g} value={g}>
                  {g}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="culture">
          Filter By culture:
          <input
            type="text"
            name="culture"
            id="culture"
            value={culture}
            onChange={handleCultureChange}
            className="border m-1"
          />
        </label>
        <label htmlFor="pageSize">
          Items Per Page:
          <select
            name="pageSize"
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="border m-1"
          >
            {pageSizeOptions.map((p) => {
              return (
                <option key={p} value={p}>
                  {p}
                </option>
              );
            })}
          </select>
        </label>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : !error ? (
        characters.length ? (
          <CharacterList characters={characters} />
        ) : (
          <p>Nothing found.</p>
        )
      ) : (
        <p>Sorry there was an error.</p>
      )}

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={prevPage}
          className="m-2 p-1 border hover:bg-black hover:bg-opacity-30"
          disabled={page === 1}
        >
          Prev Page
        </button>
        <span className="m-2">{page}</span>
        <button
          onClick={nextPage}
          className="m-2 p-1 border hover:bg-black hover:bg-opacity-30"
          disabled={page === maxPage || !characters.length}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default CharactersTable;
