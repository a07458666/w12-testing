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

  test('buy three different books', () => {
    potter.buy(0, 1);
    potter.buy(1, 1);
    potter.buy(2, 1);
    expect(potter.price).toBe(8 * 3 * 0.90);
  });

  test('buy four different books', () => {
    potter.buy(0, 1);
    potter.buy(1, 1);
    potter.buy(2, 1);
    potter.buy(3, 1);
    expect(potter.price).toBe(8 * 4 * 0.80);
  });

  test('buy five different books', () => {
    potter.buy(0, 1);
    potter.buy(1, 1);
    potter.buy(2, 1);
    potter.buy(3, 1);
    potter.buy(4, 1);
    expect(potter.price).toBe(8 * 5 * 0.75);
  });

  test('buy (0, 2) (1, 1)', () => {
    potter.buy(0, 2);
    potter.buy(1, 1);
    expect(potter.price).toBe(8 + (8 * 2 * 0.95));
  });

  test('buy (0, 2) (1, 2)', () => {
    potter.buy(0, 2);
    potter.buy(1, 2);
    expect(potter.price).toBe(2 * (8 * 2 * 0.95));
  });


  test('buy (0, 2) (1, 1), (2, 2) (3, 1)', () => {
    potter.buy(0, 2);
    potter.buy(1, 1);
    potter.buy(2, 2);
    potter.buy(3, 1);
    expect(potter.price).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
  });

  test('buy (0, 2) (1, 2), (2, 2) (3, 1), (4, 1)', () => {
    potter.buy(0, 2);
    potter.buy(1, 2);
    potter.buy(2, 2);
    potter.buy(3, 1);
    potter.buy(4, 1);
    expect(potter.price).toBe(2 * (8 * 4 * 0.8));
  });


});
