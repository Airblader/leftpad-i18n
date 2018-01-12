const leftPad = require('./');
const test = require('tape');

test('leftPad', assert => {
    assert.plan(24);

    assert.strictEqual(leftPad('Foo', 5), '  Foo');
    assert.strictEqual(leftPad('Foo', 3), 'Foo');
    assert.strictEqual(leftPad('Foo', 1), 'Foo');
    assert.strictEqual(leftPad('Foo', -1), 'Foo');

    assert.strictEqual(leftPad('Foo', 5, 'x'), 'xxFoo');
    assert.strictEqual(leftPad('Foo', 3, 'x'), 'Foo');
    assert.strictEqual(leftPad('Foo', 1, 'x'), 'Foo');
    assert.strictEqual(leftPad('Foo', -1, 'x'), 'Foo');

    assert.strictEqual(leftPad(null, 1), 'null');
    assert.strictEqual(leftPad(null, 5), ' null');
    assert.strictEqual(leftPad(10, 4), '  10');
    assert.strictEqual(leftPad(10, 4, 0), '0010');

    assert.strictEqual(leftPad('Foo', 5, ' ', true), 'Foo  ');
    assert.strictEqual(leftPad('Foo', 3, ' ', true), 'Foo');
    assert.strictEqual(leftPad('Foo', 1, ' ', true), 'Foo');
    assert.strictEqual(leftPad('Foo', -1, ' ', true), 'Foo');

    assert.strictEqual(leftPad('Foo', 5, 'x', true), 'Fooxx');
    assert.strictEqual(leftPad('Foo', 3, 'x', true), 'Foo');
    assert.strictEqual(leftPad('Foo', 1, 'x', true), 'Foo');
    assert.strictEqual(leftPad('Foo', -1, 'x', true), 'Foo');

    assert.strictEqual(leftPad(null, 1, ' ', true), 'null');
    assert.strictEqual(leftPad(null, 5, ' ', true), 'null ');
    assert.strictEqual(leftPad(10, 4, ' ', true), '10  ');
    assert.strictEqual(leftPad(10, 4, 0, true), '1000');
});
