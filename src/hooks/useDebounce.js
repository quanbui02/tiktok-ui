import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [useDebounceValue, setuseDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setuseDebounceValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return useDebounceValue;
}

export default useDebounce;
