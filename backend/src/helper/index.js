// @fn: create an username for user by email, account id
// @ex: dyno2000@email.com, id: 127391212 => dyno200012739
exports.createUsername = (email = '', id = '') => {
  const idStr = id.toString();
  return (
    email.toString().split('@')[0] + idStr.slice(idStr.length - 5, idStr.length)
  );
};
