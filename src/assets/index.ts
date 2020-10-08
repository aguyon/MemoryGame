function shuffle(array: object[]) {
  const _array = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }
  return _array;
}

export default function initializeDeck() {
  let id = 0;
  const cards = [
    'apple',
    'avocado',
    'banana',
    'corn',
    'lemon',
    'lettuce',
    'onion',
    'strawberry'
  ].reduce((acc: object[], value: string) => {
    acc.push({ id: id++, value });
    acc.push({ id: id++, value });
    return acc;
  }, []);

  return shuffle(cards);
}
