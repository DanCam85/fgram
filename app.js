import { posts } from "./data.js";

const content = document.getElementById("content");

function renderContent() {
  let section = "";
  const allPosts = posts;
  for (let post of allPosts) {
    section += `
      <section id="section">
      <div id="posts">
        <div class="flex-row">
          <img
            class="avatar"
            src=${post.avatar}
            alt=""
          />
          <p id="name" class="bold">
            ${post.name} <span id="location">${post.location}</span>
          </p>
        </div>
        <img
          class="post-img"
          src=${post.post}
          alt=""
        />
        <div id="icons">
          <img class="icons" src="images/icon-heart.png" alt="like icon" />
          <img
            class="icons"
            src="images/icon-comment.png"
            alt="comment icon"
          />
          <img class="icons" src="images/icon-dm.png" alt="message icon" />
        </div>
        <div class="user-interaction">
          <p class="bold">${post.date}</p>
          <p class="bold">${post.likes} likes</p>
          <p><span class="bold">${post.username} says</span> ${post.comment}</p>
        </div>
      </div>
    </section>
`;
  }
  content.innerHTML = section;
}

renderContent();
