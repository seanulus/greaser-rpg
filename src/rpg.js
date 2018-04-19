export class Character {
  constructor (strength, attitude, intelligence, getup) {
    this.strength = strength;
    this.attitude = attitude;
    this.intelligence = intelligence;
    this.getup = getup;
    this.level = 1;
    this.exp = 0;
  }

  strengthVal() {
    if (this.strength === "Joey") {
      this.strength = 7;
    } else if (this.strength === "Spuds") {
      this.strength = 9;
    } else if (this.strength === "Lucy") {
      this.strength = 6;
    } else {
      this.strength = 5;
    }
    return this.strength;
  }
  attitudeVal() {
    if (this.attitude === "Sassy") {
      this.attitude = 7;
    } else if (this.attitude === "Rockin") {
      this.attitude = 6;
    } else if (this.attitude === "Spunky") {
      this.attitude = 5;
    } else {
      this.attitude = 4;
    }
    return this.attitude;
  }
  intelligenceVal() {
    if (this.intelligence === "Freshmen") {
      this.intelligence = 4;
    } else if (this.intelligence === "Sophmore") {
      this.intelligence = 5;
    } else if (this.intelligence === "Junior") {
      this.intelligence = 6;
    } else {
      this.intelligence = 7;
    }
    return this.intelligence;
  }
  getupVal() {
    if (this.getup === "One") {
      this.getup = 8;
    } else if (this.getup === "Two") {
      this.getup = 6;
    } else if (this.getup === "Three") {
      this.getup = 5;
    } else {
      this.getup = 7;
    }
    return this.getup;
  }
  minusStrength() {
    return this.strength -= 2;
  }
  plusStrength() {
    return this.strength += 2;
  }
  minusIntel() {
    return this.intelligence -= 2;
  }
  plusIntel() {
    return this.intelligence += 2;
  }
  minusAtt() {
    return this.attitude -= 2;
  }
  plusAtt() {
    return this.attitude += 2;
  }
  minusGet() {
    return this.getup -= 2;
  }
  plusGet() {
    return this.getup += 2;
  }
  levelUp() {
    if (this.exp < 100) {
      this.exp += 50;
    } else {
      this.exp = 0;
      this.level += 1;
    }
    return this.exp;
    return this.level;
  }
}
