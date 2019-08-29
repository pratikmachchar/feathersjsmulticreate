const assert = require('assert');
const app = require('../../src/app');

describe('\'playground\' service', () => {
  it('registered the service', () => {
    const service = app.service('playground');

    assert.ok(service, 'Registered the service');
  });
});
