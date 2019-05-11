# validate.js



A library para validators.


## Installation and Usage

### Server-side usage

Install the library with `npm install validate`

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

