# leftpad-i18n [![npm version](https://badge.fury.io/js/leftpad-i18n.svg)](https://badge.fury.io/js/leftpad-i18n)

## What is this?

A version of the popular and infamous `leftPad` function wich properly supports internationalization.

## How do I use this?

After installing the package via `npm install leftpad-i18n` you can use it as follows:

```
const leftPad = require('leftpad-i18n');

leftPad('Foo', 5);      // '  Foo'
leftPad('Foo', 5, 'x'); // 'xxFoo'
leftPad(12, 3, 0);      // '012'
```

Of course, the true power of leftpad-i18n comes into play with the additional `rtl` flag:

```
leftPad('Foo', 5, ' ', true); // 'Foo  '
```

## Is this serious?

Of course.

;-)

# License

See `LICENSE` file.
