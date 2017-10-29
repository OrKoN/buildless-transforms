const ejs = require('./index');

describe('ejs', () => {
  it('should work', () => {
    return ejs({}, '', {});
  });
})