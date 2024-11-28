const jeterDes = require(".")

describe('jeterDes', () =>{
    it.each([
        {input:[1,1,2,2,3],output:9},
        {input:[1,1,4,3,3],output:12},
        {input:[1,1,1,1,1],output:50},
        {input:[3,3,3,3,3],output:50},


    ])("should return $output when given $input", ({input, output}) => {
        expect(jeterDes(input)).toBe(output);
    });
});