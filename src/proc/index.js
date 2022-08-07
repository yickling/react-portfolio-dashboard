import { format, fromUnixTime } from 'date-fns';

const POINTS_ON_GRAPH = 200;

// Assumption: Per minute graph
function reduceDataPoints(data, targetCount) {
  const count = data.length / targetCount;
  return data.reduce((prev, current, index) => (index % parseInt(count + 1, 10) === 0 ? [...prev, current] : prev), []); // eslint-disable-line max-len
}

const compileDataPoints = async (data) => ({
  '1h': reduceDataPoints(data.data
    .filter((r) => r.timestamp > data.endTime - 60 * 60)
    .map((r) => ({
      ...r,
      label: format(fromUnixTime(r.timestamp), 'dd-LLL HH:mm'),
    })), POINTS_ON_GRAPH),
  '1d': reduceDataPoints(
    data.data
      .filter((r) => r.timestamp > data.endTime - 24 * 60 * 60)
      .map((r) => ({
        ...r,
        label: format(fromUnixTime(r.timestamp), 'dd-LLL HH:mm'),
      })),
    POINTS_ON_GRAPH
  ),
  '1w': reduceDataPoints(
    data.data
      .filter((r) => r.timestamp > data.endTime - 7 * 24 * 60 * 60)
      .map((r) => ({
        ...r,
        label: format(fromUnixTime(r.timestamp), 'dd-LLL HH:mm'),
      })),
    POINTS_ON_GRAPH
  ),
  '1m': reduceDataPoints(
    data.data
      .filter((r) => r.timestamp > data.endTime - 31 * 24 * 60 * 60)
      .map((r) => ({
        ...r,
        label: format(fromUnixTime(r.timestamp), 'dd-LLL'),
      })),
    POINTS_ON_GRAPH
  ),
  '1y': reduceDataPoints(
    data.data
      .filter((r) => r.timestamp > data.endTime - 365 * 24 * 60 * 60)
      .map((r) => ({
        ...r,
        label: format(fromUnixTime(r.timestamp), 'dd-LLL'),
      })),
    POINTS_ON_GRAPH
  ),
});

export { compileDataPoints };
