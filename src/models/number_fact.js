const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumberFact = function () {};

NumberFact.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit', (event) => {
    const request = new Request(`http://numbersapi.com/${event.detail}?json`);
    request.get((json) => {
      const numberFact = json.text;
      PubSub.publish("NumberFact:factLoaded", numberFact);
    });
  });
};
module.exports = NumberFact;
