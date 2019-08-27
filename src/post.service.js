
import request from "./http";
import config from "./api";

class PostService {
  constructor(config, http) {
    this.url = config.url;
    this.http = http;
  }
  async posts() {
    try {
      const response = await this.http(`${this.url}/posts`);
      return response;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async users() {
    try {
      const response = await this.http(`${this.url}/users`);
      return response;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async comments() {
    try {
      const response = await this.http(`${this.url}/comments`);
      return response;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}


const postService = new PostService(config, request);

export default postService;

