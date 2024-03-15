export class SomeClass {
  a: string
  b: string
  c: string

  constructor(a: string, b: string, c: string) { 
    this.a = a
    this.b = b
    this.c = c
  }

  computeValue() : number {
    if (this.a == 'qwerty') {
      return 6
    }
    if (this.b == 'www') {
      return 4
    }
    if (this.c == 'something') {
      return 16
    }
    return 0
  }
}
