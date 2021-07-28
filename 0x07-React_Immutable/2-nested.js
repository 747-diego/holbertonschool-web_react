import { getIn, fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const nest = getIn(fromJS(object), array, undefined);
  return (nest);
}
