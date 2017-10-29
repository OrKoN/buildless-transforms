const babel = require('babel-core');

module.exports = function babelTransform(config, data, environment) {
  const code = data.toString('utf8');
  const result = babel.transform(code);
  return Promise.resolve(
    Buffer.from(result.code || '', 'utf8'),
  );
};