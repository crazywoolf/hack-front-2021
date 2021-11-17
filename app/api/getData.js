import {GET_DATA} from '../constants/urls';

const mock = {
    fio: 'test name',
    id: '123',
    discount: 10,
}

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
      return res.json();
    } else {
      onFailed(mock);
    }
  })
  .then(res => onSuccess(res))
  .catch(() => {
    onFailed(mock);
  });
