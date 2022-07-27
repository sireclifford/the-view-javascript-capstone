/* eslint-disable*/
import axios from 'axios';
import { singleMovieAPI, baseUrl } from '../http-service';

export default async (id) => {
  let response;
  await axios.get(`${baseUrl}${singleMovieAPI}?imdb_id=${id}`)
    .then((res) => response = res)
    .catch((err) => response = err);

  return response;
};
