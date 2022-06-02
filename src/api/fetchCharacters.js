const baseURL = 'https://anapioficeandfire.com/api/characters';

const fetchCharacters = async (
  page = 1,
  itemsPerPage = 25,
  gender = '',
  culture = ''
) => {
  const res = await fetch(
    `${baseURL}?page=${page}&pageSize=${itemsPerPage}${
      gender && `&gender=${gender}`
    }${culture && `&culture=${culture}`}`
  );
  const data = await res.json();
  return data;
};

export default fetchCharacters;
