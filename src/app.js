const NumberFormView = require('./views/number_form_view');
const NumberFact = require('./models/number_fact.js');
const NumberFactDisplay = require('./views/number_fact_display.js')

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const numberFact = new NumberFact();
  numberFact.bindEvents();

  const numberFactGet = document.querySelector('section#number-fact');
  const numberFactDisplay = new NumberFactDisplay(numberFactGet);
  numberFactDisplay.bindEvents();
});
