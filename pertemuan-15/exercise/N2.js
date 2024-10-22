// Nomor 2 - addNumber

export const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  let sum = 0;

  numbers.map((num) => (sum += num));
  return sum;
};
