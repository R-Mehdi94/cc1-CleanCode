const jeterDes = require(".")

describe('jeterDes', () =>{
    it.each([
        {input:[1,1,2,2,3],output:9},
    ])("should return $output when given $input", ({input, output}) => {
        expect(jeterDes(input)).toBe(output);
    });
});