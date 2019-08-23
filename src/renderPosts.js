const postContainer = document.querySelector(".container.cardsection .row");

function postTemplate(post, users, comments) {
  const user = users.find(user => user.id === post.userId);
  const postComents = comments.filter(comment => comment.postId === post.id);

  let commentsBlock = '';
  postComents.forEach(postComent => {
    commentsBlock += `
    <div class="card mb-2"> 
      <div class="card-body p-2">
        <p class="card-subtitle text-muted comment-name pb-2">${
          postComent.name
        }</p>
        
        <p class="card-subtitle text-muted comment-body m-0">${
          postComent.body
        }</p>
        <span class="card-subtitle d-block text-right comment-email pt-2">${
          postComent.email
        }</span>
      </div>
      
    </div>  
    `;
  });
  
  return `
  <div class="col-md-6 card-container">
    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title">${post.title || ""}</h4>
        <p class="card-text">${post.body || ""}</p>
        <span class="d-block text-right">${user.username}</span>
        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#userInfo_${
          post.id
        }">User info</button>
        <a class="btn btn-outline-primary btn-comments" data-toggle="collapse" href="#comment_${
          post.id
        }" aria-expanded="false" data-post-id=${post.id}>Comments</a>
        <div class="modal" id="userInfo_${
          post.id
        }" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">User info</h5>
              </div>
              <div class="modal-body">
                <p class="card-subtitle text-muted user-name">Name: ${
                  user.name
                }</p>
                <p class="card-subtitle text-muted user-email">Email: ${
                  user.email
                }</p>
                <p class="card-subtitle text-muted user-website">Website: ${
                  user.website
                }</p>
                <p class="card-subtitle text-muted user-phone">Phone: ${
                  user.phone
                }</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse" id="comment_${post.id}">
          <div class="card card-body p-1">
            <h6 class="card-title mb-1">Comments</h3>
            ${commentsBlock}
          </div>
        </div>
       </div>
    </div>
  </div> 
  `;
}

function renderPosts({ posts, users, comments }) {
  let fragment = "";
  posts.forEach(post => {
    const el = postTemplate(post, users, comments);
    fragment += el;
  });
 
  postContainer.insertAdjacentHTML("afterbegin", fragment);

  $(function() {
    $(".card-container").slice(0, 10).show();
    $("#loadMore").on("click", e => {
      e.preventDefault();
      $(".card-container:hidden").slice(0, 10).slideDown();
    })
  })
}

export default renderPosts;
