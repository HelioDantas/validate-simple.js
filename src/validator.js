
class Validator  {

    constructor() {
    }

    isUndefined(value) {
        return typeof value === "undefined";
    };

    isArrayUndefined(values) {

        return values. filter(value => {
            if (typeof value === "undefined") {
                return `${value} is undefined`;
            }
        });
    };
}

module.exports = new Validator();