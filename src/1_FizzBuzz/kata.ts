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

export const fizzBuzzRefacto = (count: number): string => {
  const rules = [
    { divisor: 15, result: 'fizzbuzz' },
    { divisor: 3, result: 'fizz' },
    { divisor: 5, result: 'buzz' },
  ];

  const match = rules.find((rule) => count % rule.divisor === 0);
  return match?.result ?? count.toString();
};
