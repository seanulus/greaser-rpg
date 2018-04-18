import { Character } from './../src/rpg.js';



describe('Character', function() {

  let character;

  beforeEach(function() {
    character = new Character(10, 10, 10, 10);
  })

  it('should test if the character has stats', function() {
    expect(character.strength).toEqual(10);
    expect(character.attitude).toEqual(10);
    expect(character.intelligence).toEqual(10);
    expect(character.getup).toEqual(10);
  });

  it('should test if characters stats are changed', function() {
    expect(character.toSmoke()).toEqual(8)
  });

  it('should raise strength and lower intelligence', function() {
    expect(character.toGain()).toEqual(8, 12);
  });
});
