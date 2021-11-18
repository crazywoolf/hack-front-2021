import {NEW_CARD} from '../constants/urls';
import {client} from "../constants";

export const newCard = (onSuccess, onFailed) => fetch(
    NEW_CARD,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            amount: client,
        })
    }
)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            onFailed();
        }
    })
    .then(res => {
        onSuccess(res);
    })
    .catch(() => {
        onFailed();
    });
