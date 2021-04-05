const { DateTime } = require("luxon");

const d = DateTime.local();
const today = d.minus({ hours: d.toObject().hour });

const getInteractionsNum = (arr) => {
  const interactionsToday = arr.filter(a => a.created_at > today.toMillis() && a.created_at < Date.now());
  const interactionsHour = interactionsToday.filter(a => a.created_at > d.minus({hour: 1}).toMillis() && a.created_at < Date.now())

  return { interactions: arr.length, interactionsToday: interactionsToday.length, interactionsHour: interactionsHour.length };
};

const getDynamicPricing = (arr, price) => {
  const dynamicPricing = arr.filter((dp) => dp.price !== undefined).sort((a, b) => b.price + a.price);
  if (dynamicPricing.length === 0) return { change: -1 };

  const t1 = dynamicPricing[0].price;
  const t2 = price;

  const change = (t1 - t2) / ((t1 + t2) / 2) * 100;

  return { change: Math.round(change), direction: Math.sign(change) }
}

module.exports = { getInteractionsNum, getDynamicPricing }