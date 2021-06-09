import { MultTablePipe } from './mult-table.pipe';

describe('MultTablePipe', () => {
  let pipe: MultTablePipe;
  beforeEach(() => {
    pipe = new MultTablePipe();
  });

  it('should return an empty array if the value of digit is not valid', () => {
    const digit = 0;
    const limit = 10;
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual([]);
  });

  it('should return an empty array if the value of limit is not valid', () => {
    const digit = 10;
    const limit = 0;
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual([]);
  });

  it('should return the correct multiplication table when both digit and limit inputs are valid', () => {
    const digit = 10;
    const limit = 2;
    const expectedArray = ['10 * 1 = 10', '10 * 2 = 20'];
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual(expectedArray);
  });

  it('should round of the limit if it is provided in decimals', () => {
    const digit = 10;
    const limit = 3.5;
    const expectedArray = ['10 * 1 = 10', '10 * 2 = 20', '10 * 3 = 30'];
    const outputArray = pipe.transform(null, digit, limit);
    expect(outputArray).toEqual(expectedArray);
  });
});
