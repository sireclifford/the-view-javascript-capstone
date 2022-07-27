import axios from 'axios';
import { involvementBaseUrl, appId } from '../http-service';

export default async (movieId) => {
  let response;
  await axios
    .post(
      `${involvementBaseUrl}/apps/${appId}/likes/`,
      {
        item_id: movieId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
};