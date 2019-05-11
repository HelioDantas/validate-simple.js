const validator = require('validator');
const myValidator = require('./validator');

class ValidateFactory {
    constructor() {
    }

    async metodo(op, value, key) {
        switch (op) {
            case 'required':
                if (myValidator.isUndefined(value))
                    return `${key} não pode ser Undefined!`;
                break;
        }
        if (myValidator.isUndefined(value))
            return undefined;
        switch (op) {
            case 'required':
                if ( myValidator.isUndefined(value))
                    return `${key} não pode ser Undefined!`;
                break;
            case 'isEmpty':
                if ( validator.isEmpty(value) === true)
                    return `${key} não pode ser vazio!`;
                break;
            case 'isEmail':
                if ( !validator.isEmail(value) === true)
                    return `${key} não é Email!`;
                break;
            case 'isBoolean':
                if ( !validator.isBoolean(value) === true)
                    return `${key} não e um boolean`;
                break;
            case 'isJSON':
                if ( !validator.isJSON(value) === true)
                    return `${key} não e um json`;
                break;
            case 'isURL':
                if ( !validator.isURL(value) === true)
                    return `${key} não e um URL`;
                break;
            case 'isNumeric':
                if ( !validator.isNumeric(value) === true)
                    return `${key} não e um numero`;
                break;
            case 'isMD5':
                if (await !validator.isMD5(value) === true)
                    return `${key} não e um hash MD5`;
                break;
            case 'isMACAddress':
                if ( !validator.isMACAddress(value) === true)
                    return `${key} não e um MAC Address valido`;
                break;
            case 'isLowercase':
                if ( !validator.isLowercase(value) === true)
                    return `${key} não esta em minuscula `;
                break;
            case 'isFloat':
                if ( !validator.isFloat(value) === true)
                    return `${key} não e um float `;
                break;
            case 'isDecimal':
                if ( !validator.isDecimal(value) === true)
                    return `${key} não e um decimal `;
                break;
            default:
                throw 'Não existe propriedade ' + key;
        }
    }

}

module.exports = new ValidateFactory();