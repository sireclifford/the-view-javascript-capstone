const displayCommments = async (movieId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6MIoDJ3ru05goBGOD5Ex/comments?item_id=${movieId}`,
  )
    .then((res) => {
      if (!res.ok) {
        Promise.reject(res);
        return [];
      }
      return res.json();
    });
  return response;
};

export default displayCommments;
