const countComment = () => {
  const commentList = document.querySelector('.comments');
  const comments = commentList.querySelectorAll('li');
  const noOfComments = document.querySelector('#no-of-comments');
  noOfComments.innerHTML = `${comments.length}`;
};

export default countComment;