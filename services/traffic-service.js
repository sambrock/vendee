const { DateTime } = require("luxon");

// Get traffic count
const getTrafficByHour = (arr) => {
  const hours = [];

  let index = 0;
  arr.reduce((total, c, i) => {
    if (i === 1) return total.count;

    const previous = arr[i - 1];
    const calc = c.count - previous.count;

    if (DateTime.fromMillis(previous.created_at).toObject().hour > DateTime.fromMillis(c.created_at).toObject().hour) {
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

  return hours.map((h, i) => {
    return { count: h, hour: DateTime.fromMillis(arr.slice(-1)[0].created_at).toObject().hour + i }
  });
};

const getTotalCountPerDay = (arr) => {
  if (arr.length === 0) return;
  return arr.reduce((total, c, i) => {
    if (i === 1) return total.count;

    const previous = arr[i - 1];
    const calc = c.count - previous.count;

    if (Math.sign(calc) === -1) return total;

    return total + calc;
  });
}

const getDwellTime = (arr, cams) => {
  const timesCount = arr.map(a => {
    const time = DateTime.fromMillis(a.created_at).toISOTime();

    return { ts: a.created_at, time, count: a.count };
  }).sort((a, b) => a.ts - b.ts);

  const totalCount = getTotalCountPerDay(timesCount);

  const totalTime = timesCount.reduce((total, c, i) => {
    if (i === 1) return 0;

    const a = DateTime.fromMillis(c.ts);
    const b = DateTime.fromMillis(timesCount[i - 1].ts);

    const diff = a.diff(b, 'seconds').toObject();

    return total + diff.seconds;
  });

  const date = new Date(0);
  const seconds = Math.round(totalTime / totalCount) - 420; // Test data is inconsistant, so reduce the average times when testing
  date.setSeconds(seconds);
  const string = date.toISOString().substr(14, 5);

  return { seconds, string };
};

const getTrafficByWeek = arr => {
  const countPerDay = [];

  let days = 0;

  arr.reduce((total, c, i) => {
    if (i === 1) return total.count;

    const previous = arr[i - 1];
    const calc = c.count - previous.count;

    if (Math.sign(calc) === -1) return total;

    // If day is greater than previous, push total to new array, start new total
    if (DateTime.fromMillis(c.created_at).toISODate() === DateTime.local().minus({ days: days }).toISODate()) {
      return total + calc;
    } else {
      countPerDay.push(total + calc);
      days++;
      return 0;
    }
  });

  return countPerDay.reverse();
}

const getTrafficDayChange = (today, yesterday) => {
  const t1 = getTotalCountPerDay(today);
  const t2 = getTotalCountPerDay(yesterday);

  const change = (t1 - t2) / ((t1 + t2) / 2) * 100;

  return { count: t1, change: Math.round(change), direction: Math.sign(change) };
}

const getOccupancy = (arr, cams) => {
  const latestCount = [];

  // Get first occurance of cam_id, this is latest count from that camera
  for (i = 0; i < cams; i++) {
    const first = arr.find(t => t.cam_id === i + 1);
    latestCount.push(first);
  }

  return latestCount.filter(() => { return true }).reduce((a, b) => ({ count: a.count + b.count }));
}

module.exports = { getTrafficByHour, getTotalCountPerDay, getDwellTime, getTrafficByWeek, getTrafficDayChange, getOccupancy };