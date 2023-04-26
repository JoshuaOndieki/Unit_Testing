import{it, expect} from 'vitest'
import { transformToNumber } from './numbers'

it('Should return a  number given a string', ()=>{
    const input ="12"
    const result = transformToNumber(input)
    expect(result).toBeTypeOf('number')
})

it('Should return NAN if give a Non transformable number', ()=>{
    const input ="five"
    const input1 =["five"]
    const result = transformToNumber(input)
    const result1 = transformToNumber(input1)
    expect(result).toBeNaN()
    expect(result1).toBeNaN()

})