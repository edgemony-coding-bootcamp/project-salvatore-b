export const setLengthTitle = (titolo, range) =>
titolo.length >= range ? titolo.substring(0, range) + '...' : titolo;