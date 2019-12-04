'use strict';
//Reviewing the rules of fizzbuz
// if a number is divisble by 3, return fizz
// if divisible by 5, return buzz
// if divisible by both, return fizzbuzz

/** //jsDoc Syntax 
 * @param {number} num 
  * @returns {*} will return 'fizzbuzz', 'buzz', 'fizz; or the number
 */
function fizzbuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}

/**
 * will take in the result of the fizzbuzz function
 * Builds the HTML for the fizzbuzz output
 * @param {*} fizzResult
 * @returns {string} generate ONE fizzbuzz item
 */
function createFizzHtml(fizzResult){ 
  let fizzClass = '';
  if (typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  }
  return `
    <div class="fizz-buzz-item ${fizzClass}"> 
      <span>${fizzResult}</span>
    </div>
  `;
}

//Will handle the form submission
function handleSubmit() {
  $('#number-chooser').on('submit', event => {
    event.preventDefault();

    const countTo = $('#number-choice').val();
    $('#number-choice').val('');

    const fizzbuzzResults = [];

    for (let i = 1; i <= countTo; i++) {
      fizzbuzzResults.push(fizzbuzz(i));
    }

    //console.log(fizzbuzzResults);

    const html = fizzbuzzResults.map(result => createFizzHtml(result));
    $('.js-result').html(html);
    //console.log(html);
  });
}

$(handleSubmit);

