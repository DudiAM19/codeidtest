import axios from 'axios';

const createApiInstance = async () => {
  try {
    const api = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
    });

    api.interceptors.request.use(
      async config => {
        config.headers.Authorization =
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2FhNjE4YTgwYzYxMzQyMDA2M2RjNDViNTliYzZlMyIsIm5iZiI6MTcxOTgwMjA2MC4yOTc4NzMsInN1YiI6IjYxYmI0MGE3YWM2Yzc5MDA4ODRmYjM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ut6IhpMMwt1vttDC4EzpX2vEnFVNBq7jO26O1V4njWk';

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    return api;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Export the function to create the Axios instance
export default createApiInstance;
