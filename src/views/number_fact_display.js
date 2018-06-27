const PubSub = require('../helpers/pub_sub.js')

const NumberFactDisplay = function(container) {
  this.container = container
};

NumberFactDisplay.prototype.bindEvents = function () {
  PubSub.subscribe("NumberFact:factLoaded", (event) => {
    this.render(event.detail);
  })
};

NumberFactDisplay.prototype.render = function (fact) {
  this.container.innerHTML = "";
  const paragraph = document.createElement('p');
  paragraph.textContent = fact
  this.container.appendChild(paragraph);
};

module.exports = NumberFactDisplay;
