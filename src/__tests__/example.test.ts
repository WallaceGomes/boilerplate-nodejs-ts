const add = (a: number, b: number) => {
  return a + b;
};

describe('This is a test', () => {
  it('shoud pass', () => {
    expect(add(1, 2)).toBe(3);
  });
});
