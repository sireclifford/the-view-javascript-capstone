import './style.css';
// eslint-disable-next-line no-unused-vars
import logo from './assets/images/the-view-logo.png';
import like from './assets/images/like.png';

import fetchMovies from './modules/fetchMovies';

const displayMoviesUI = (movies) => {
  const moviesList = document.querySelector('.main');
  moviesList.innerHTML = '';
  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    movieEl.classList.add('movie-item');
    movieEl.innerHTML = `
       <div class="movie-item" id="${movie.id}">
            <img class="flyer" src="${movie.medium_cover_image}" alt="gray_man">
            <div class="movie-footer">
                <div class="title">
                    <p>${movie.title_long}</p>
                    <img class="like-icon" src="${like}" alt="like_icon">
                </div>
                <button type="submit" class="comment-btn">Comments</button>
            </div>
        </div>
        `;
    moviesList.appendChild(movieEl);
  });
};

fetchMovies().then((response) => {
  displayMoviesUI(response.data.data.movies);
});
