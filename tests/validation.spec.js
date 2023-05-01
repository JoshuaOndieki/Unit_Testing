import { shapingNumber, validateNumber, validateStringNotEmpty } from "../dist/util/validation"
import { it,expect,describe} from 'vitest'

describe('test for validateStringNotEmpty ()', ()=>{
    it('should throw an Error if the string is Empty',()=>{
        const input = ''
    
        const resultFn =()=> validateStringNotEmpty(input)
    
        expect(resultFn).toContain(/must not be empty/)
    })
    
    it('should  not throw an Error if the string is not Empty',()=>{
        const input = 'Hello'
    
        const resultFn =()=> validateStringNotEmpty(input)
    
        expect(resultFn).not.toThrow(/must not be empty/)
    })
    
    it('should  not throw an Error if the Value is not a string',()=>{
        const input = [2,3]
    
        const resultFn =()=> validateStringNotEmpty(input)
    
        expect(resultFn).toThrow()
    })
    
})
describe('Test for validateNumber()', ()=>{
    
it('Should throw an Error if i pass an non numeric',()=>{
    const input = '123'

    const resultFn =()=> validateNumber(input)

    expect(resultFn).toThrow()
})

it('Should throw an Error if i pass an NAN',()=>{
    const input = NaN

    const resultFn =()=> validateNumber(input)

    expect(resultFn).toThrow()
})

it('Should throw an Error if i pass an non numeric',()=>{
    const input = 123

    const resultFn =()=> validateNumber(input)

    expect(resultFn).not.toThrow()
})
})

describe('ShapingNumbers() Tests', ()=>{
    it('Should give us an array of numbers given an array of strings',()=>{
        const input = ['1','2','3']
    
        const result= shapingNumber(input)
    
        expect(result).toEqual([1,2,3])
    })
    it('throw an Error', ()=>{
        const input = ['1','2',' ']
    
        const resultFn= ()=>shapingNumber(input)
    
        expect(resultFn).toThrow()
    })
})