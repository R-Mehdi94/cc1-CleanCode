const jeterDes = require(".")

describe('jeterDes', () =>{
    it.each([
        {input:[1,1,2,2,3],output:9},
        {input:[1,1,4,3,3],output:12},
        {input:[1,1,1,1,1],output:50},
        {input:[3,3,3,3,3],output:50},
        {input:[1,2,3,4,5],output:40},
        {input:[2,3,4,5,6],output:40},
        {input:[1,1,1,5,6],output:28},




    ])("should return $output when given $input", ({input, output}) => {
        expect(jeterDes(input)).toBe(output);
    });
});