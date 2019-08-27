import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap";

import postStore from "./post.store";
import { renderPosts, btnMorePosts, handlerPosts } from "./renderPosts";



document.addEventListener("DOMContentLoaded", () => {
  postStore.init().then(res => {
    renderPosts(res);
  });
});

btnMorePosts.addEventListener("click", () => handlerPosts());