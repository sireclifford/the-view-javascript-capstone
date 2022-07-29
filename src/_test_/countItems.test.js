import fetchMovies from '../modules/fetchMovies';

describe('fetchMovies', () => {
  it('should return an array of movies', async () => {
    expect.assertions(1);
    const response = await fetchMovies();
    expect(response.data.data.movies.length).toBe(15);
  });
});
