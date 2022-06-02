import { useState, useMemo, useEffect } from 'react';
import fetchCharacters from '../api/fetchCharacters';

const MAX_ITEMS = 2134;

export const genderOptions = ['Any', 'Male', 'Female'];
export const pageSizeOptions = [10, 25, 50];

const useCharactersPagination = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[1]);
  const [gender, setGender] = useState(genderOptions[0]);
  const [culture, setCulture] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let newData = await fetchCharacters(page, pageSize, gender, culture);
        setData(newData);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page, pageSize, gender, culture]);

  const nextPage = () =>
    setPage((prevState) => {
      if (prevState < maxPage) return (prevState += 1);
      return prevState;
    });

  const prevPage = () =>
    setPage((prevState) => {
      if (prevState > 1) return (prevState -= 1);
      return prevState;
    });

  const maxPage = useMemo(() => Math.ceil(MAX_ITEMS / pageSize), [pageSize]);

  useEffect(() => {
    setPage((p) => (p > maxPage ? maxPage : p));
  }, [maxPage, setPage]);

  const handlePageSizeChange = async (event) =>
    setPageSize(parseInt(event.target.value));

  const handleGenderChange = async (event) => {
    setPage(1);
    setData([]);
    setGender(event.target.value);
  };

  const handleCultureChange = (event) => {
    if (/\d/.test(event.target.value)) return;
    setPage(1);
    setData([]);
    setCulture(event.target.value);
  };
  console.log('Data', data);

  return {
    characters: data,
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
  };
};

export default useCharactersPagination;
