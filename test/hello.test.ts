import { assert } from 'chai';

import hello from '../src/hello';

describe('hello', () => {
    it('should properly greet Corey', () => {
        assert.equal(hello('Corey'), 'Hi Corey. Would you like to share a cup of 🍫☕️?')
    });
});
