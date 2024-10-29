export const fibonacci = (input: number): number => {
  if (input == 0) return 0;
  if (input == 1) return 1;

  return fibonacci(input - 1) + fibonacci(input - 2);
};

export const fibonacciIterative = (input: number): number => {
  if (input <= 1) return input;

  let prev = 0; // représente F(n-2)
  let current = 1; // représente F(n-1)
  let result = 0; // représente F(n)

  for (let i = 2; i <= input; i++) {
    result = prev + current;
    prev = current;
    current = result;
  }

  return result;
};
