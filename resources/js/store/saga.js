import axios from 'axios';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';


export default function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) });
  yield watchRequests();
}

axios.interceptors.request.use(
  config => {
    const storedToken = localStorage.getItem('access_token');
    try{
      const data = JSON.parse(storedToken);
      config.headers.Authorization = `${data.token_type} ${data.access_token}`;
    } catch (e) {
      localStorage.removeItem('access_token');
    }

    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('access_token');
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);
