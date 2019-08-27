import postService from './post.service';

class PostStore {
  constructor(api) {
    this.api = api;
    this.posts = null;
    this.users = null;
    this.comments = null;
  }
  async init() {
    const response  = await Promise.all([
      this.api.posts(),
      this.api.users(),
      this.api.comments()
    ]);
    const [ posts, users, comments ] = response;
    this.posts = posts;
    this.users = users;
    this.comments = comments;
    return { posts, users, comments };
  }
}

const postStore = new PostStore(postService);

export default postStore;