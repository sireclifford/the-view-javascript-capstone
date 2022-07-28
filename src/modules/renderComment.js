/* eslint-disable*/
import createComments from "./createComment";
import displayCommments from "./displaycomment";

const popupSection = document.querySelector('.popup');
const createComment = async (movie) => {
  const comment = document.createElement('div');
  comment.classList.add('comment-container');
  comment.innerHTML = `
  <div class="movie-comment" id="${movie.id}">
    <i class="fa-solid fa-xmark"></i>
    <div>
      <img class="flyer" src="${movie.large_cover_image}" alt="gray_man">
      <h2>${movie.title}</h2>
    </div>
    <div class="movie-details">
      <div class="movie-feature">
        <p>Genres: ${movie.genres}</p>
        <p>Runtime: ${movie.runtime} min.</p>
      </div>
      <div class="movie-feature">
        <p>Likes: ${movie.like_count}</p>
        <p>Downloads: ${movie.download_count}</p>
      </div>
    </div>
    <div class="comment-section">
      <h3>Comments</h3>
      <ul class="comments">
        <li>
        <div class="comment-item">
        <p>name: </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
        </li>
        <li>
        <div class="comment-item">
        <p>name: </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
        </li>
        <li>
        <div class="comment-item">
        <p>name: </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
        </li>

      </ul>
      <form class="comments-form">
      <h3>Add a comment</h3>
      <input class="border" type=text placeholder="Your name" id="username" name="usernmae">
      <textarea class="border" placeholder="Your comment" id="comment" name="comment"></textarea>
      <button class="border comment-btn" type="submit">Submit</button>   
      </form>
    </div>
  </div>
  `;
  popupSection.appendChild(comment);
  const commentPopup = document.querySelector('.popup');
  const closePopup = document.querySelector('.fa-solid');
  closePopup.addEventListener('click', () => {
    commentPopup.style.display = 'none';
    location.reload();
  });
  const showComment = async (id) => {
    const comments = await displayCommments(id);
    console.log(comments);
    const commentList = document.querySelector('.comments');
    comments.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.innerHTML = `
      <div class="comment-item">
        <p>${comment.username}</p>
        <p>${comment.comment}</p>
      </div>
      `;
      commentList.appendChild(commentItem);
    }
    );
  }

  const inputName = document.querySelector('#username').value;
  const inputComment = document.querySelector('#comment').value;
  const form = document.querySelector('.comments-form');
  form.addEventListener('submit', (e) => {
    console.log(inputName)
    e.preventDefault();
    createComments({
      "item_id": movie.id,
      "username": inputName,
      "comment": inputComment,
  }).then((res) => {
    console.log(res);
  })


  })
  showComment(movie.id);
};

export { createComment as default };