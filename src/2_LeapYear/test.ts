import { leapYear } from './kata';

/*- A leap year is defined as:

- one that is divisible by 4
- but is not otherwise divisible by 100
- unless it is also divisible by 400.

- For example:
- 2001 is a typical common year
- 1996 is a typical leap year
- 1900 is an atypical common year
- 2000 is an atypical leap year */

describe('Leap year should', () => {
  test('1 is not a leap year', () => {
    //given
    const year: number = 1;
    const resultExpected = false;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
  test('4 is a leap year', () => {
    //given
    const year: number = 4;
    const resultExpected = true;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
  test('100 is not leap year', () => {
    //given
    const year: number = 100;
    const resultExpected = false;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
  test('400 is  leap year', () => {
    //given
    const year: number = 400;
    const resultExpected = true;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
  test('1996 is a leap year', () => {
    //given
    const year: number = 1996;
    const resultExpected = true;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
  test('2000 is a leap year', () => {
    //given
    const year: number = 2000;
    const resultExpected = true;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
  test('1900 is not leap year', () => {
    //given
    const year: number = 1900;
    const resultExpected = false;
    //when
    const result = leapYear(year);
    //then
    expect(result).toBe(resultExpected);
  });
});
