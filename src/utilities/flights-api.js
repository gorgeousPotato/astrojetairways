import sendRequest from './send-request';
const BASE_URL = '/api/flights';

// // Refactored code below
// export function signUp(userData) {
//   return sendRequest(BASE_URL, 'POST', userData);
// }

// export function login(credentials) {
//   return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
// }

// export function checkToken() {
//   return sendRequest(`${BASE_URL}/check-token`)
// }

export function search(url) {
  return sendRequest(url, 'GET');
}

export function getFlight(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addTicket(id, data) {
  return sendRequest(`${BASE_URL}/${id}/tickets`, 'POST', data);
}

export function getTickets(id) {
  return sendRequest(`${BASE_URL}/${id}/tickets`)
}