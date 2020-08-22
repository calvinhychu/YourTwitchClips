module.exports = {
  compare: function (a, b) {
    let comparison = 0;
    if (a.views < b.views) {
      comparison = 1;
    } else if (a.views > b.views) {
      comparison = -1;
    }
    return comparison;
  },
};
