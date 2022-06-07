import {TOKEN} from "./token" 

export const getAlbum = async () => {
  const response = await fetch(
    `https://edgemony-backend.herokuapp.com/440/albums/`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
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
        Authorization: `Bearer ${TOKEN}`,
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
  fetch(`https://edgemony-backend.herokuapp.com/660/albums/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

export const putPlaylist = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/660/playlist/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

export const putRatingAlbum = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/660/albums/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

export const putRatingPlaylist = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/660/playlist/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });
