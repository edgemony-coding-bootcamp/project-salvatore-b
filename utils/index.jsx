export const getAlbum = async () => {
  const response = await fetch(
    `https://edgemony-backend.herokuapp.com/440/albums/`,
    {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NTQ1OTM2OTUsImV4cCI6MTY1NDU5NzI5NSwic3ViIjoiMSJ9._BkM8ocbRrpac8moXFfi90DdC13gcNL1w0BVJp5BJ_w"}`,
      },
    }
  );
  const data = await response.json();


    data.forEach((data) => {
      data[`iam`] = "album";
    });


  return data;
};

export const getPlaylist = async () => {
  const response = await fetch(
    `https://edgemony-backend.herokuapp.com/440/playlist/`,
    {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NTQ1OTM2OTUsImV4cCI6MTY1NDU5NzI5NSwic3ViIjoiMSJ9._BkM8ocbRrpac8moXFfi90DdC13gcNL1w0BVJp5BJ_w"}`,
      },
    }
  );
  const data = await response.json();


    data.forEach((data) => {
      data[`iam`] = "playlist";
    });


  
  return data;
};

export const putAlbum = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/440/albums/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NTQ1OTM2OTUsImV4cCI6MTY1NDU5NzI5NSwic3ViIjoiMSJ9._BkM8ocbRrpac8moXFfi90DdC13gcNL1w0BVJp5BJ_w"}`,
    },
    body: JSON.stringify(body),
  });

export const putPlaylist = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/440/playlist/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NTQ1OTM2OTUsImV4cCI6MTY1NDU5NzI5NSwic3ViIjoiMSJ9._BkM8ocbRrpac8moXFfi90DdC13gcNL1w0BVJp5BJ_w"}`,
    },
    body: JSON.stringify(body),
  });

export const putRatingAlbum = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/440/albums/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NTQ1OTM2OTUsImV4cCI6MTY1NDU5NzI5NSwic3ViIjoiMSJ9._BkM8ocbRrpac8moXFfi90DdC13gcNL1w0BVJp5BJ_w"}`,
    },
    body: JSON.stringify(body),
  });

export const putRatingPlaylist = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/440/playlist/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpYXQiOjE2NTQ1OTM2OTUsImV4cCI6MTY1NDU5NzI5NSwic3ViIjoiMSJ9._BkM8ocbRrpac8moXFfi90DdC13gcNL1w0BVJp5BJ_w"}`,
    },
    body: JSON.stringify(body),
  });

// export const postUserCredentials = (credentials) => {
//   fetch(`https://edgemony-backend.herokuapp.com/users`),
//     {
//       method: "POST",
//       header: { "Content-type": "application/json" },
//       body: JSON.stringify(credentials)
//         .then((response) => response.json())
//         .then((data) => console.log(data)),
//     };
// };
