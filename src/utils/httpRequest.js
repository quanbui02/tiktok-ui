import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  baseURLsideBar: process.env.REACT_APP_BASE_URL_SIDE_BAR,
});
export default httpRequest;
