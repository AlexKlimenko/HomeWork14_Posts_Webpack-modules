import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap";

import postStore from "./post.store";
import renderPosts from "./renderPosts";

postStore.init().then(res => {
  renderPosts(res);
});


