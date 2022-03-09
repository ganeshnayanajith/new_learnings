import axios from 'axios';

export class LoremPicSumPostService {
  static baseURL = `https://picsum.photos/v2`;

  static getAllPosts() {
    const getPostsURL = `${this.baseURL}/list?page=1&limit=10`;
    return axios.get(getPostsURL);
  }
}