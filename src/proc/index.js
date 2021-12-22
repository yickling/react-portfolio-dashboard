import { format, fromUnixTime } from "date-fns";

const POINTS_ON_GRAPH = 200

// Assumption: Per minute graph
function reduceDataPoints(data, targetCount) {
  const count = data.length / targetCount
  return data.reduce((prev, current, index) => index % parseInt(count + 1) === 0 ? [...prev, current] : prev, [])
}

async function compileDataPoints(data) {
  var compiled = {};

  console.error(data.data.length);
  console.error(data.startTime);
  console.error(data.endTime);

  compiled["1h"] = data.data
    .filter((r) => r.timestamp > data.endTime - 60 * 60)
    .map((r) => ({
      ...r,
      label: format(fromUnixTime(r.timestamp), "dd-LLL hh:mm"),
    }));
  compiled["1d"] = data.data
    .filter((r) => r.timestamp > data.endTime - 24 * 60 * 60)
    .map((r) => ({
      ...r,
      label: format(fromUnixTime(r.timestamp), "dd-LLL hh:mm"),
    }));
  compiled["1w"] = data.data
    .filter((r) => r.timestamp > data.endTime - 7 * 24 * 60 * 60)
    .map((r) => ({
      ...r,
      label: format(fromUnixTime(r.timestamp), "dd-LLL"),
    }));
  compiled["1m"] = reduceDataPoints(
    data.data
      .filter((r) => r.timestamp > data.endTime - 31 * 7 * 24 * 60 * 60)
      .map((r) => ({
        ...r,
        label: format(fromUnixTime(r.timestamp), "dd-LLL"),
      })),
    POINTS_ON_GRAPH
  );
  compiled["1y"] = reduceDataPoints(
    data.data
      .filter((r) => r.timestamp > data.endTime - 365 * 7 * 24 * 60 * 60)
      .map((r) => ({
        ...r,
        label: format(fromUnixTime(r.timestamp), "dd-LLL"),
      })),
    POINTS_ON_GRAPH
  );

  return compiled;
}

export { compileDataPoints };
