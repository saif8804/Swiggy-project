import { sum } from "../sum"

test("sum should be sum of two numbers" , ()=>{
       const result = sum(3, 4 )
     
       //Assertion
       expect(result).toBe(7);
}); 