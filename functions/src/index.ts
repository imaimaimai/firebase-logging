import * as functions from 'firebase-functions';
import * as axios from 'axios'
// import {Logging} from '@google-cloud/logging';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getApi = functions.https.onRequest(async (request, response) => {
  const api = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';
  functions.logger.info("APIにアクセスします");
  try {
    const apiResponse = await axios.default.get(api);
    // 最後の引数をオブジェクトにすると、jsonPayloadとして解釈しログに表示してくれる
    functions.logger.info('getting resource was done successfully.', { response: apiResponse.data });
    response.send(apiResponse.data)
  } catch (e) {
    functions.logger.error(e.message, {code: e.code});
    response.send(e.message);
  }
});
