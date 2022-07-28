import './style.css';
// eslint-disable-next-line no-unused-vars
import logo from './assets/images/the-view-logo.png';
import like from './assets/images/like.png';

import fetchMovies from './modules/fetchMovies';

import createComment from './modules/renderComment';
import fetchComment from './modules/fetchComment';
import likeMovie from './modules/likeMovie';
import getMovieLikes from './modules/getMovieLikes';

const displayMoviesUI = (movies) => {
  const pageTitle = document.querySelector('.page-title');
  pageTitle.innerHTML = `Popular movies (${movies.length})`;
  const moviesList = document.querySelector('.main');
  moviesList.innerHTML = '';
  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    movieEl.classList.add('movie-item');
    movieEl.innerHTML = `
        <div class="movie-item">
            <img class="flyer" src="${movie.medium_cover_image}" alt="gray_man">
            <div class="movie-footer">
                <div class="title">
                    <p>${movie.title_long}</p>
                    <img id="${movie.id}" class="like-icon" src="${like}" alt="like_icon">
                </div>
                <div class="likes">
                    <p>${movie.likes} likes</p>
                    </div>
              <button id="${movie.imdb_code}" type="submit" class="comment-btn">Comments</button>
            </div>
        </div>
        `;
    moviesList.appendChild(movieEl);
  });
  const commentButton = document.querySelectorAll('.comment-btn');
  const commentPopup = document.querySelector('.popup');
  commentButton.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      fetchComment(e.target.id).then((response) => {
        createComment(response.data.data.movie);
        commentPopup.style.display = 'block';
      });
    });
  });
  const likeIcons = document.querySelectorAll('.like-icon');
  likeIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      likeMovie(e.target.id)
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
        });
    });
  });
};

fetchMovies().then((response) => {
  const restructuredMovies = [];
  getMovieLikes().then((res) => {
    const likes = res.data;
    const { movies } = response.data.data;
    movies.forEach((movie) => {
      const fm = likes.find((like) => like.item_id === String(movie.id));
      if (fm) {
        restructuredMovies.push({
          ...movie,
          likes: fm.likes,
        });
      } else {
        restructuredMovies.push({
          ...movie,
          likes: 0,
        });
      }
    });
    displayMoviesUI(restructuredMovies);
  });
});