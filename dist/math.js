import { shapingNumber } from "./util/validation.js";

export function add(numbers) {
  let sum = 0;
 
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}




export function calculateResults(numberInputs){
  let result = '';
  
  try {
    const numbers=shapingNumber(numberInputs)
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}