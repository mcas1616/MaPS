const add = require('./add');

describe("add test",function(){
    it('3 + 2 = 5', () => {
        expect(add.addfunc(3, 2)).toBe(5);
    })
})
