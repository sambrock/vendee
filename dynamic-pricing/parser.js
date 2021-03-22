const nightmare = require('nightmare')();

const checkPrice = async (url, element) => {
  try {
    const priceString = await nightmare
      .goto(url)
      .wait(element)
      .evaluate(element => {
        if ([...element][0] === '#') return document.getElementById(element.substring(1)).innerText;
        if ([...element][0] === '.') return document.getElementsByClassName(element.substring(1))[0].textContent;
      }, element)

    return priceString;
  } catch (err) {
      return false;
  }
};

module.exports = { checkPrice };