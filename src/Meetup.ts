
export class Meetup {
  rowOne: number
  rowTwo: number
  rowThree: number
  rowFour: number

  constructor(one: number, two: number, three: number, four: number) {
    this.rowOne = one
    this.rowTwo = two
    this.rowThree = three
    this.rowFour = four
  }

  calculateAttendees() {
    return this.rowOne + this.rowTwo + this.rowThree + this.rowFour
  }
}
