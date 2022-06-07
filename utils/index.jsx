//import { useContext } from "react";
//import { MyContext } from "../Context/context";

//import {TOKEN} from "./token" 

//const {tokenForAll, setTokenForAll} = useContext(MyContext);

export const getAlbum = async () => {
  const response = await fetch(
    `https://edgemony-backend.herokuapp.com/440/albums/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });

export const putPlaylist = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/660/playlist/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });

export const putRatingAlbum = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/660/albums/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });

export const putRatingPlaylist = (id, body) =>
  fetch(`https://edgemony-backend.herokuapp.com/660/playlist/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });
