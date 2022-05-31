export const getAlbum = async () => {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/albums/`);
    const data = await response.json();

    data.forEach(data => {
        data[`iam`] = 'album';
    });
    console.log('albums',data);

    return data
}



export const getPlaylist = async () => {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/playlist/`);
    const data = await response.json();

    data.forEach(data => {
        data[`iam`] = 'playlist';
    });
    console.log('playlist',data);
    return data
}