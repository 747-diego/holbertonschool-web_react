import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Action Tests', () => {
  it('Testing the selected action', () => {
    const argument = selectCourse(1);
    expect(argument).toEqual({
      type: SELECT_COURSE, index: 1
    });
  });

  it('Testing the unselected action ', () => {
    const argument = unSelectCourse(1);
    expect(argument).toEqual({
      type: UNSELECT_COURSE, index: 1
    });
  });
});
