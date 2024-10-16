import {create} from 'apisauce';
import {BASE_URL} from './url';
import Storage from '../auth/storage';
import store from '../redux/Store/store';
import {SUBSCRIPTION} from '../redux/Action/actionType';

let hasShownAlert = false;
const apiClient = create({
  baseURL: BASE_URL,
});

apiClient.addAsyncResponseTransform(async request => {
  if (request.status === 600 || request.status === 600) {
    store.dispatch({type: SUBSCRIPTION, payload: false});
    await Storage.EnableSubscription(false);
  }
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await Storage.getToken();
  request.headers['Authorization'] = `Bearer ${authToken}`;
  request.headers['Content-Type'] = 'application/json';
  request.headers['Accept'] = 'application/json';
  request.headers['Content-Type'] = 'multipart/form-data';
});

export default apiClient;
