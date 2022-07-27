import axios from 'axios';
import { involvementBaseUrl, appId } from '../http-service';

export default async () => {
  let response;
  await axios
    .get(`${involvementBaseUrl}/apps/${appId}/likes/`)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
};
