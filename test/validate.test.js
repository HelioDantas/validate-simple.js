const {ok, deepEqual} = require('assert');

const Validate = require('./../index');
describe('Teste!', function () {

    it('validate', async () => {
        const expected = ['body não pode ser Undefined!', 'to não é Email!'];
        const valid = new Validate({to: 'helio'});
        const result = await valid.validate({
            'to': ['required', 'isEmail', 'isEmpty'],
            'body': ['required', 'isEmpty'],
        });
        deepEqual(result, expected);
    })

});
