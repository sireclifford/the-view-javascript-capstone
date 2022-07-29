test('Count number of comments', () => {
  document.body.innerHTML = `
  <h3><span id="no-of-comments"></span> Comments</h3>
  <div class="text-light comments">
    <div class="com">
      <h4>elem.username</h4>
      <p>elem.comment</p>
      <p>elem.creation_date</p>
    </div>
    <div class="com">
      <h4>elem.username</h4>
      <p>elem.comment</p>
      <p>elem.creation_date</p>
    </div>
    <div class="com">
      <h4>elem.username</h4>
      <p>elem.comment</p>
      <p>elem.creation_date</p>
    </div>
  </div>
  `;
  const number = document.querySelector('div.comments').children.length;
  expect(number).toBe(3);
});