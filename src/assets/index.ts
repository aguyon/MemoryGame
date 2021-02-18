function shuffle(array: object[]) {
  const _array: object[] = array.slice(0);

  for (let i: number = 0; i < array.length - 1; i++) {
    let randomIndex: number = Math.floor(Math.random() * (i + 1));
    let temp: object = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
}

export default function initializeDeck() {
  let id: number = 0;
  let cardsName: string[] = ['apple', 'avocado', 'banana', 'corn', 'lemon', 'lettuce', 'onion', 'strawberry'];

  const cards: object[] = cardsName.reduce((acc: object[], value: string) => {
    acc.push({ id: id++, value });
    acc.push({ id: id++, value });
    return acc;
  }, []);

  return shuffle(cards);
}
