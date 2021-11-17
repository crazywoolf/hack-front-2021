import {GET_DATA} from '../constants/urls';

export const getData = (clientId, onSuccess, onFailed) => fetch(
    GET_DATA(clientId),
  {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=utf-8'
    },
  }
)
  .then(res => {
    if (res.ok) {
      onSuccess();
    } else {
      onFailed();
    }
  })
  .catch(() => {
    onFailed();
  });
