const assert = require('assert');
const app = require('../../src/app');

describe('\'tdo\' service', () => {
  it('registered the service', () => {
    const service = app.service('tdo');

    assert.ok(service, 'Registered the service');
  });
});
