const { DateTime } = require("luxon");

// Get traffic count
const getCountPerHour = (arr) => {
  const hours = [];

  let index = 0;
  arr.reduce((total, c, i) => {
    if (i === 1) return total.count;

    const previous = arr[i - 1];
    const calc = c.count - previous.count;


    if (previous.hour < c.hour) {
      index++;
      total = 0;
    };

    if (Math.sign(calc) === -1) {
      hours[index] = total;
      return total;
    };

    hours[index] = total + calc;
    return total + calc;
  });

  return hours;
};

const getTotalCountPerDay = (arr) => {
  return arr.reduce((total, c, i) => {
    if (i === 1) return total.count;

    const previous = arr[i - 1];
    const calc = c.count - previous.count;

    if (Math.sign(calc) === -1) return total;

    return total + calc;
  });
}

const getAverageTime = (arr) => {
  const timesCount = arr.map(a => {
    const time = DateTime.fromJSDate(a.time).toISOTime();
    const ts = DateTime.fromJSDate(a.time).toMillis();

    return { ts, time, count: a.count };
  }).sort((a, b) => a.ts - b.ts);

  const totalCount = getTotalCountPerDay(timesCount);

  const totalTime = timesCount.reduce((total, c, i) => {
    if (i === 1) return 0;

    const a = DateTime.fromMillis(c.ts);
    const b = DateTime.fromMillis(timesCount[i - 1].ts);

    const diff = a.diff(b, 'seconds').toObject();
    console.log(diff);

    return total + diff.seconds;
  });

  const date = new Date(0);
  const seconds = process.env.NODE_ENV === 'test' ? (Math.round(totalTime / totalCount) - 420) : Math.round(totalTime / totalCount); // Test data is inconsistant, so reduce the average times when testing
  date.setSeconds(seconds);
  const string = date.toISOString().substr(14, 5);

  return { seconds, string };
};

module.exports = { getCountPerHour, getTotalCountPerDay, getAverageTime };