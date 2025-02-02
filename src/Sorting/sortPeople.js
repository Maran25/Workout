/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  for (let i = 0; i < names.length; i++) {
    let max = heights[i];
    for (let j = i; j < names.length; j++) {
      if (heights[j] > max) {
        max = heights[j];
        [heights[j], heights[i]] = [heights[i], heights[j]];
        [names[j], names[i]] = [names[i], names[j]];
      }
    }
  }

  return names;
};

sortPeople(
  [
    "IEO",
    "Sgizfdfrims",
    "QTASHKQ",
    "Vk",
    "RPJOFYZUBFSIYp",
    "EPCFFt",
    "VOYGWWNCf",
    "WSpmqvb",
  ],
  [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]
);
