function filter_list(l) {
  let list = [];
  for (i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) === true) {
      list.push(l[i]);
    }
  }
  return list;
}

Shorter solution:
function filter_list(l) {
  return l.filter(i => Number.isInteger(i));
}