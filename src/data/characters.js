export const characterFiles = {
  1: '1.png',
  2: '2.webp',
  3: '3.webp',
  4: '4.png',
  5: '5.png',
  6: '6.png',
  7: '7.png',
};

export const getCharacterSrc = (selectedAvatar) => {
  const fileName = characterFiles[selectedAvatar] || characterFiles[1];
  return `${process.env.PUBLIC_URL}/character/${fileName}`;
};
