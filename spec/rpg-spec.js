import { Character } from './../src/rpg.js';

describe('Character', function() {

  it('should test if the character has stats', function() {
    let character = new Character(2,4,5,6);
    expect(character.strength).toEqual(2);
    expect(character.attitude).toEqual(4);
    expect(character.intelligence).toEqual(5);
    expect(character.getup).toEqual(6);
  });
});
