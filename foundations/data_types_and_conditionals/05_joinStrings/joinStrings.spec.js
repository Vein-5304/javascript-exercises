const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Basti', () => {
    expect(values.firstName).toEqual('Basti');
  });
  test('lastName is Alarcon', () => {
    expect(values.lastName).toEqual('Alarcon');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Basti Alarcon and I am 23 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Basti Alarcon', () => {
    expect(values.fullName).toEqual('Basti Alarcon');
  });
  test('age is 23', () => {
    expect(values.age).toEqual(23);
  });
});
