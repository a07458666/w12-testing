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
    expect(potter.price).toBe(0);
  });
});
