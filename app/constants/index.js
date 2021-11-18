export const QR_TYPE = {
  PAYMENT: 'payment',
  SUBSCRIPTION: 'subscription',
  PAYMENT_AND_SUBSCRIPTION: 'getData-and-subscription'
}

export const ROUTES = {
  PAYMENT_SUCCESS: '/reader/status/success',
  PAYMENT_FAILED: '/reader/status/failed',
}

export const amount = 2589;
export const client = {
  amount: 1234,
  card: {
    fio: 'Андрей Личман',
    id: '1234abc',
    discount: 10,
    loyalPoints: 0
  }
}
