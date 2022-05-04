import { Potter } from './potter';

describe('Potter', () => {

  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });

  it('should create an instance', () => {
    expect(new Potter()).toBeTruthy();
  });

  test('buy zero book', () => {
    potter.buy(0, 0);
    expect(potter.price).toBe(0);
  });

  test('buy one book', () => {
    potter.buy(0, 1);
    expect(potter.price).toBe(8);
  });

  test('buy five book', () => {
    potter.buy(0, 5);
    expect(potter.price).toBe(40);
  });

  test('buy two different books', () => {
    potter.buy(0, 1);
    potter.buy(1, 1);
    expect(potter.price).toBe(16 * 0.95);
  });
});
