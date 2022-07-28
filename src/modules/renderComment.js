/* eslint-disable*/
const popupSection = document.querySelector('.popup');
const createComment = async (movie) => {
  const comment = document.createElement('div');
  comment.classList.add('comment-container');
  comment.innerHTML = `
  <div class="movie-comment" id="">
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
  </div>
  `;
  popupSection.appendChild(comment);
  const commentPopup = document.querySelector('.popup');
  const closePopup = document.querySelector('.fa-solid');
  closePopup.addEventListener('click', () => {
    commentPopup.style.display = 'none';
    location.reload();
  });
};

export { createComment as default };