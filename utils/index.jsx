export const getAlbum = async () => {
    const response = await fetch(`https://edgemony-backend.herokuapp.com/albums/`);
    const data = response.json();
    return data
}