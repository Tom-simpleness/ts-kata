export const fizzBuzz = (count: number): string => {
  if (count % 15 === 0) {
    return 'fizzbuzz';
  }
  if (count % 3 === 0) {
    return 'fizz';
  }
  if (count % 5 === 0) {
    return 'buzz';
  }
  return count.toString();
};
