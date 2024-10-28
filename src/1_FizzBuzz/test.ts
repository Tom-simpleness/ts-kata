import { fizzBuzz } from './kata';

describe('calling fizzBuzz()', () => {
  test('when I fizzbuzz 1 return "1"', () => {
    //Given
    const count: number = 1;
    const expectedResult: string = '1';
    //When
    const result: string = fizzBuzz(count);
    //Then
    expect(result).toBe(expectedResult);
  });
  test('when I fizzbuzz 2 return "2"', () => {
    //Given
    const count: number = 2;
    const expectedResult: string = '2';
    //When
    const result: string = fizzBuzz(count);
    //Then
    expect(result).toBe(expectedResult);
  });
  test('when I fizzbuzz 4 return "4"', () => {
    //Given
    const count: number = 4;
    const expectedResult: string = '4';
    //When
    const result: string = fizzBuzz(count);
    //Then
    expect(result).toBe(expectedResult);
  });
  test('when I fizzbuzz 3 return "fizz"', () => {
    //Given
    const count: number = 3;
    const expectedResult: string = 'fizz';
    //When
    const result: string = fizzBuzz(count);
    //Then
    expect(result).toBe(expectedResult);
  });
  test('when I fizzbuzz 5 return "buzz"', () => {
    //Given
    const count: number = 5;
    const expectedResult: string = 'buzz';
    //When
    const result: string = fizzBuzz(count);
    //Then
    expect(result).toBe(expectedResult);
  });
});

describe('calling fizzBuzz() one block', () => {
  it.each([
    [1, '1'],
    [2, '2'],
    [3, 'fizz'],
    [4, '4'],
    [5, 'buzz'],
    [15, 'fizzbuzz'],
  ])('when I fizzbuzz %i return "%s"', (input, expected) => {
    //When
    const result: string = fizzBuzz(input);
    //Then
    expect(result).toBe(expected);
  });
});
