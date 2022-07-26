import axios from 'axios';
import { baseUrl, listMoviesAPI } from '../http-service';

const params = {
  limit: 15,
  page: 1,
  minimum_rating: 6.0,
  query_term: '',
  genre: '',
  sort_by: 'year',
  order_by: 'desc',
};

export default async () => {
  let response;
  await axios
    .post(
      `${baseUrl}${listMoviesAPI}?limit=${params.limit}&sort_by=${params.sort_by}
      &order_by=${params.order_by}&minimum_rating=${params.minimum_rating}`,
    ).then((res) => {
      response = res;
    })
    .catch((err) => { response = err; });

  return response;
};