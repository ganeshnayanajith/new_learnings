import axios from 'axios';

export class PostService {
  static baseURL = `http://localhost:4000/v1`;

  static config = {
    headers: {
      'x-api-key': 'test_api_key',
      'x-api-secret': 'test_api_secret',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjI0YTA0MDQzYzQ3OTY4ZjlhMjMzNDEiLCJlbWFpbCI6ImdhbmVzaG5heWFuYWppdGg1MEBnbWFpbC5jb20iLCJpYXQiOjE2NDY1Njc0ODgsImV4cCI6MTY0NzE3MjI4OH0.7ZnFG5pnTmzrKPX6CIV05tSA1pA5NenNtAVk4Ndjh4A'
    }
  };

  static getAllPosts() {
    const getPostsURL = `${this.baseURL}/post`;
    return axios.get(getPostsURL, this.config);
  }

  static createPost(post) {
    const createPostsURL = `${this.baseURL}/post`;
    return axios.post(createPostsURL, post, this.config);
  }

  static deletePost(id) {
    const deletePostsURL = `${this.baseURL}/post/${id}`;
    return axios.delete(deletePostsURL, this.config);
  }

}