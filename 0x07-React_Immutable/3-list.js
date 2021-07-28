import { List } from 'immutable';

export function getListObject(array) {
  const list = List(array);
  return (list);
}

export function addElementToList(list, string) {
  const pushString = list.push(string);
  return (pushString);
}
