import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const useFetch = URL => {
  const [data, setData] = useState(null);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = useCallback(async () => {
    try {
      const {data: response} = await axios.get(URL);
      setData(response);
      setLoad(false);
    } catch (err) {
      setError(err);
      setLoad(false);
    }
  }, [URL]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return {data, loading, error};
};

export default useFetch;
