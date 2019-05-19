const va = require('./validateFactory');

class Validate {
    constructor(data) {
        this.data = data;
    }

    async validate(valite, messages = []) {
        const tt = [];
        await Promise.all(Object.keys(valite).map(async key => {
            for (const kk of valite[key]) {
                let message = undefined;
                if (typeof messages[key] != "undefined")
                    if (typeof messages[key][kk] != "undefined")
                        message = messages[key][kk];
                const result = await va.metodo(kk, this.data[key], key, message);
                if (typeof result !== 'undefined')
                    tt.push(result);
            }
            //   console.log(tt);
        }));
        return tt;
    }

}

module.exports = Validate;