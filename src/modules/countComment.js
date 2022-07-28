const countComment = () => {
  const commentList = document.querySelector('.comments');
  const comments = commentList.querySelectorAll('li');
  console.log(comments.length);
  const noOfComments = document.querySelector('#no-of-comments');
  noOfComments.innerHTML = `Comments(${comments.length})`;

};

export default countComment;