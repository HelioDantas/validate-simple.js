const va = require('./validateFactory');

class Validate {
    constructor(data) {
        this.data = data;
    }

    async validate(valite) {
        const tt = [];
        await Promise.all(Object.keys(valite).map(async key => {
            for (const kk of valite[key]) {
                const result = await va.metodo(kk, this.data[key], key);
                if (typeof result !== 'undefined')
                    tt.push(result);
            }
            //   console.log(tt);
        }));
        return tt;
    }

}

module.exports = Validate;