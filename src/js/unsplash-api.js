'use strict';
import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = ' https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  fetchPhotos() {
    return axios.get(`${this.#BASE_URL}/search/photos`, {
      params: {
        query: this.query,
        page: this.page,
        per_page: 12,
        color: 'black_and_white',
        client_id: this.#API_KEY,
      },
    });
  }

  fetchRandomPhotos() {
    return axios.get(`${this.#BASE_URL}/photos/random`, {
      params: {
        count: 12,
        client_id: this.#API_KEY,
      },
    });
  }
}
