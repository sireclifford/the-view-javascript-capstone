import countComment from '../modules/countComment.js';

test('Count number of comments', () => {
  document.body.innerHTML = `
  <h3><span id="no-of-comments"></span> Comments</h3>
  <ul class="comments">
  <li>1<li>
  <li>2<li>
  <li>3<li>
  <li>4<li>
  </ul>
  `;
  countComment();
  const ul = document.querySelectorAll('.comments li');
  const count = ul.length/2;
  expect(count).toBe(4);
});