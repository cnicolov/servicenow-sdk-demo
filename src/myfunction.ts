import { GlideRecord } from '@servicenow/glide'

export const miFunction = function() {
  const miClass = new MiClass('a', 'b', 'c')
  const gr = new GlideRecord('incident')
  gr.initialize()
  gr.setValue('short_description', miClass.concat())
  gr.insert()
}

export class MiClass {

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
