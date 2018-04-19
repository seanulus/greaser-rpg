import { Character } from './../src/rpg.js';



describe('Character', function() {

  let character;

  beforeEach(function() {
    character = new Character(10, 10, 10, 10, 1, 0);
  })

  it('should test if the character has stats', function() {
    expect(character.strength).toEqual(10);
    expect(character.attitude).toEqual(10);
    expect(character.intelligence).toEqual(10);
    expect(character.getup).toEqual(10);
    expect(character.level).toEqual(1);
    expect(character.exp).toEqual(0);
  });

  it('should test if characters stats go down', function() {
    expect(character.minusIntel()).toEqual(8);
    expect(character.minusStrength()).toEqual(8);
    expect(character.minusAtt()).toEqual(8);
    expect(character.minusGet()).toEqual(8);
  });
  it('should test if characters stats go up', function() {
    expect(character.plusIntel()).toEqual(12);
    expect(character.plusStrength()).toEqual(12);
    expect(character.plusAtt()).toEqual(12);
    expect(character.plusGet()).toEqual(12);
  });
  it('should test if character levels up', function () {
    expect(character.levelUp()).toEqual(50);
  });
});
