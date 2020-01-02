module.exports = function(children, search) {
  return children.filter(child => child.slug === search);
};
