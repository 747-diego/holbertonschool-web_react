import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  const sel = { type: SELECT_COURSE, index };
  return (sel);
}

export function unSelectCourse(index) {
  const uns = { type: UNSELECT_COURSE, index };
  return (uns);
}
