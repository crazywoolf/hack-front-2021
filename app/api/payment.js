import {PAYMENT} from '../constants/urls';

export const payment = (clientId, onSuccess, onFailed) => fetch(
    PAYMENT(clientId),
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    }
)
    .then(res => {
        if (res.ok) {
            onSuccess()
        } else {
            onFailed();
        }
    })
    .catch(() => {
        onFailed();
    });
