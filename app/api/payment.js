import {PAYMENT} from '../constants/urls';
import {amount} from "../constants";

export const payment = (clientId, discount, onSuccess, onFailed) => fetch(
    PAYMENT(clientId),
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            amount: (amount * (100 - discount || 10) / 100),
        })
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
