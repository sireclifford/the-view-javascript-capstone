import axios from "axios";
import { involvementBaseUrl, appId } from "../http-service";
const createComments = async (body) => {
  let response;
  await axios
    .post(
      `${involvementBaseUrl}/apps/${appId}/comments`,
      {
        item_id: body.item_Id,
        username: body.username,
        comment: body.comment,
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

export default createComments;