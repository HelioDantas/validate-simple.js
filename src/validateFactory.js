const validator = require('validator');
const myValidator = require('./validator');

class ValidateFactory {
    constructor() {
    }

    async metodo(op, value, key, message) {
        switch (op) {
            case 'required':
                if (myValidator.isUndefined(value)) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não pode ser Undefined!`;
                }
                break;
        }
        if (myValidator.isUndefined(value))
            return undefined;
        switch (op) {
            case 'required':
                if (myValidator.isUndefined(value)) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não pode ser Undefined!`;
                }
                break;
            case 'isEmpty':
                if (validator.isEmpty(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não pode ser vazio!`;
                }
                break;
            case 'isEmail':
                if (!validator.isEmail(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não é Email!`;
                }
                break;
            case 'isBoolean':
                if (!validator.isBoolean(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um boolean`;
                }
                break;
            case 'isJSON':
                if (!validator.isJSON(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um json`;
                }
                break;
            case 'isURL':
                if (!validator.isURL(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um URL`;
                }
                break;
            case 'isNumeric':
                if (!validator.isNumeric(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um numero`;
                }
                break;
            case 'isMD5':
                if (await !validator.isMD5(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um hash MD5`;
                }
                break;
            case 'isMACAddress':
                if (!validator.isMACAddress(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um MAC Address valido`;
                }
                break;
            case 'isLowercase':
                if (!validator.isLowercase(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não esta em minuscula `;
                }
                break;
            case 'isFloat':
                if (!validator.isFloat(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um float `;
                }
                break;
            case 'isDecimal':
                if (!validator.isDecimal(value) === true) {
                    if (typeof message != "undefined")
                        return message;
                    return `${key} não e um decimal `;
                }
                break;
            default:
                throw 'Não existe propriedade ' + key;
        }
    }

}

module.exports = new ValidateFactory();