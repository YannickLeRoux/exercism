function isLeapYear(n: number): boolean {
  const year = {
    isDivisibleBy: (div: number): boolean => n % div === 0,
  };

  return year.isDivisibleBy(4) && (!year.isDivisibleBy(100) || year.isDivisibleBy(400));
}

export default isLeapYear;
