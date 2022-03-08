import axios from 'axios';

export class ContactService {
  static baseURL = `https://jsonplaceholder.typicode.com`;

  static getAllContacts() {
    const getContactsURL = `${this.baseURL}/users`;
    return axios.get(getContactsURL);
  }
}