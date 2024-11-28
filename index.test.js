const jeterDes = require(".")

describe('jeterDes', () =>{
    it.each([
        {input:[1,2,3,4,5],output:1},
    ])("should return $output when given $input", ({input, output}) => {
        expect(jeterDes(input)).toBe(output);
    });
});