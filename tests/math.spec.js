import { it,expect } from "vitest";
import { add } from "../dist/math";

it ("should return sum when given an array of number", ()=>{
    // Arrange
    const numbers=[1,2,3,4,5]
    // Act
    const result= add(numbers)
    // Assert
    const expectedSum = numbers.reduce((prev,cur)=>{
        return prev+cur
    },0)
   expect(result).toBe(expectedSum)
})

it('Should return NAN if we give a string',()=>{
    const numbers=[1,2,3,4,'five']
    const result= add(numbers)
   expect(result).toBeNaN()
})

it('Should return sum when give a string array',()=>{
    const numbers=['1','2','3','4,','5']
    const result= add(numbers)

    const expectedSum = numbers.reduce((prev,cur)=>{
        return +prev +  +cur
    },0)

    expect(result).toBe(expectedSum)
})

it('Should return zero when we give an empty array',()=>{
    const numbers=[]
    const result= add(numbers)
    expect(result).toBe(0)
})

it('Should throw an Error if not given an array', ()=>{
    try {
    const numbers={}
    add(numbers)
    } catch (error) {
        expect(error).toBeDefined()
    }
})

it('should throw an error if given a non-array', ()=>{
    const numbers={}
    const input =false
    const resultFn=()=> add(numbers)
    const resultFn1=()=> add(input)
    expect(resultFn).toThrow(/is not iterable/)
    expect(resultFn1).toThrow(/is not iterable/)
})

it('should throw an error id no argument is passed', ()=>{
    const resultfn = ()=>add()
    expect(resultfn).toThrow(/is not iterable/)
})