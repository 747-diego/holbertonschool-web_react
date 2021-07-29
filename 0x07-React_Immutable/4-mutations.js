import { Map, List } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});
const map2 = List(map).withMutations((list) => {
  list.set(2, 'Benjamin').set(4, 'Oliver');
});

export { map, map2 };
