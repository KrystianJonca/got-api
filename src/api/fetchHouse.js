const fetchHouse = async (id) => {
  const res = await fetch(`https://anapioficeandfire.com/api/houses/${id}`);
  const data = await res.json();
  return data;
};

export default fetchHouse;
