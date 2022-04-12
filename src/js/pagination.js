'use strict';
// https://jsonplaceholder.typicode.com/
import createPostsCards from '../templates/posts.hbs';
import { JsonplaceholderAPI } from './jsonplaceholder-api';

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonplaceholderApi = new JsonplaceholderAPI();

jsonplaceholderApi
  .fetchPosts()
  .then(data => {
    postsWrapperEl.innerHTML = createPostsCards(data);
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonplaceholderApi.page += 1;

  jsonplaceholderApi
    .fetchPosts()
    .then(data => {
      postsWrapperEl.insertAdjacentHTML('beforeend', createPostsCards(data));
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
