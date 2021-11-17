export const GET_DATA = (clientId) => `https://team-16-back.rba.codenrock.com/api/v1/client/${clientId}/token`;
export const SUBSCRIPTION = (id) => `https://pay-test.raif.ru/api/nspc-mock/qrs/${id}/subscribe`;
export const QR_INFO = (qrId) => `https://pay-test.raif.ru/api/nspc-mock/qrs/${qrId}`
