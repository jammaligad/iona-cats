/* eslint-disable @typescript-eslint/no-explicit-any */

export const groupFormat = (
  data
) => {
  let rows = 3

  if (data.length <= 6) {
    rows = 2
  }

  return Array(Math.ceil(data.length / rows)).fill().map(function (_, i) {
    return data.slice(i * rows, i * rows + rows);
  });
};
