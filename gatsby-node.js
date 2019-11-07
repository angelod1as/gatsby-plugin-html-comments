const replace = require('replace-in-file');

exports.onPostBuild = (_, { comment, files }) => {
  const from = comment.map(each => each.regexp);
  const to = comment.map(each => each.comment);

  replace.sync({
    files,
    from,
    to,
  });
};
