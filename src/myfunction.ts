import { gs } from '@servicenow/glide'

export const miFunction = function() {
  const miClass = new MiClass('a', 'b', 'c')
  gs.addInfoMessage(miClass.concat())
}

class MiClass {
  a: string
  b: string
  c: string
  constructor(a: string, b: string, c: string) {
    this.a = a
    this.b = b
    this.c = c
  }

  concat() {
    return this.a + this.b + this.c
  }
}
