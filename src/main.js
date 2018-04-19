// empty
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './rpg.js';




$(document).ready(function() {
  $('#charAttributes').submit(function(event) {
    event.preventDefault();
    debugger;
    let strength = $('#name').val();
    let attitude = $('#sass').val();
    let intelligence = $('#class').val();
    let getup = $('#getup1').val();

    let character = new Character(strength, attitude, intelligence, getup);

    strength= character.strengthVal();
    attitude = character.attitudeVal();
    intelligence = character.intelligenceVal();
    getup = character.getupVal();
    $('#charAttributes').hide();
    $('#smokeChoice').show();

    $('#toke').click(function() {
      debugger;
      let character = new Character(strength, attitude, intelligence, getup);
      intelligence = character.minusIntel()
      attitude = character.plusAtt();
      $('#smokeChoice').hide();
      $('.football').show();
      $('#game').click(function() {
        debugger;
        let character = new Character(strength, attitude, intelligence, getup);
        character = character.plusStrength();
      });
    });
  });
});
