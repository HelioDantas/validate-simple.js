# validate-simple.js

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]


A library para validators.


## Installation and Usage

### Server-side usage

Install the library with `nnpm i validate-simple`

#### No ES6

```javascript
var Validate = require('validate');
        


   async function validate() {
       const valid = new Validate({to:'helio', body:''});
        return await valid.validate({
            'to': ['required', 'isEmail', 'isEmpty'],
            'body': ['required', 'isEmpty'],
            'subject': ['required', 'isEmpty']
        });
        
   }
 console.log(validate());
   
   /* return
    [ 'body não pode ser vazio!`', 'to não e um Email!', ' 'subject não pode ser Undefined!'  ]
   */
```




### Client-side usage



Validator                               | Description
--------------------------------------- | --------------------------------------
**required**                            | check if a string is undefined.
**isBoolean**                           | check if a string is a boolean.
**isEmail**                             | check if the string is an email.
**isEmpty**                             | check if the string has a length of zero
**isInt**                               | check if the string is an integer.
**isJSON**                              | check if the string is valid JSON (note: uses JSON.parse).
**isJWT**                               | check if the string is valid JWT token.
**isLowercase**                         | check if the string is lowercase.
**isMACAddress**                        | check if the string is a MAC address.
**isMD5**                               | check if the string is a MD5 hash.
**isURL**                               | check if the string is an URL.




## Maintainers

- [Helio](https://github.com/HelioDantas) - **Helio Dantas** (author)



## License (MIT)
```
Copyright (c) 2019 Helio Dantas <helio_dantas@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[downloads-image]: http://img.shields.io/npm/dm/validate-simple.svg
[npm-url]: https://www.npmjs.com/package/validate-simple
[npm-image]: https://img.shields.io/npm/v/validate-simple.svg

[mongoid]: http://docs.mongodb.org/manual/reference/object-id/
[ISIN]: https://en.wikipedia.org/wiki/International_Securities_Identification_Number