import { useEffect, useRef } from 'react';

function useTimeout(callback, delay) {
 const callbackRef = useRef(callback);

 useEffect(() => {
    callbackRef.current = callback;
 }, [callback]);

 useEffect(() => {
    if (delay !== null) {
      const id = setTimeout(() => callbackRef.current(), delay);
      return () => clearTimeout(id);
    }
 }, [delay]);
}

export default useTimeout;