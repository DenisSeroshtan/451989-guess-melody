export function getRandomIndexByArrayLength(length) {
  return getRandomIndex(length, 1) - 1;
}

export function getRandomIndex(indexRange, indexStart = 0) {
  return Math.floor(Math.random() * (indexRange - indexStart + 1)) + indexStart;
}

export function shuffleArray(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

