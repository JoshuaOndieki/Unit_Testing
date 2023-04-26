import {getextractedNumber } from './src/parser.js';
import {  calculateResults } from './src/math.js';
import { generateText, showOutput } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs= getextractedNumber(form)
  const result= calculateResults(numberInputs)
  const resultText = generateText(result) 
  showOutput(resultText)
}

form.addEventListener('submit', formSubmitHandler);
