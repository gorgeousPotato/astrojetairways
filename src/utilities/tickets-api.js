import sendRequest from './send-request';
const BASE_URL = '/api/tickets';

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

export function search(data) {
  return sendRequest(BASE_URL, 'GET', data);
}