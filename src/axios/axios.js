import axios from 'axios';

export default function() {
  const instance = axios.create({
    headers: {
      Authorization:
        'Bearer AAAAAAAAAAAAAAAAAAAAAG6vAAEAAAAA8wS97F1m5RQw%2Bt7hLfeROd9U%2FiA%3DYDiYfkRxGIxU9V3MtlbeVU7RFAxizQsZvwqrIVIXx6Fh8EMzIW'
    }
  });

  return instance;
}
