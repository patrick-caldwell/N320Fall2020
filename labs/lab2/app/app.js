class Instrument {
  constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }

  play() {
    console.log(`${this.family} ${this.verb} at ${this.loudness}`);
  }
}

class Woodwind extends Instrument {
  constructor(loudness, family, verb) {
    super();
    super.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
}

class Percussion extends Instrument {
  constructor(loudness, family, verb) {
    super();
    super.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
}

class Stringed extends Instrument {
  constructor(loudness, family, verb) {
    super();
    super.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }
}

let woodwind = new Woodwind("10", "Woodwind", "blows");
let percussion = new Percussion("15", "Percussion", "hits");
let stringed = new Stringed("5", "Stringed", "strums");
let instruments = [woodwind, percussion, stringed];

instruments.forEach((instrument) => {
  instrument.play();
});
