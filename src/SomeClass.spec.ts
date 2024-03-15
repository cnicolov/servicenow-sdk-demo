import { SomeClass } from "./SomeClass";

describe('My suite', () => {

  it('MiClass should concat a string', () => {
    const someClass = new SomeClass('qwerty', 'q', 'w');
    expect(someClass.computeValue()).toBe(6)
  });
});
