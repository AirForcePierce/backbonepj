import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'kTjarb1FYuGCJG9n0Cxbc7RfCW68P823t900FUUM';
const API_KEY = 'utoWNArBMCRntlr3zRWthreyOdJIyvO7XIXGRFIW';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import HeroCollection from './people_collection';
import HeroTemplate from './person_template';

let people = new HeroCollection();


function renderPeople() {
  // Creating an empty dom node
  let $ul = $('<ul></ul>');

  // iterate each of the models
  people.each(function(person){

    // person is an instance of PersonModel

    // grab raw data from person model
    let data = person.toJSON();
    console.log('data', data);

    // pass the data to our template
    let templateString = HeroTemplate(data);
    console.log('templateString', templateString);

    // use templateString to create an li dom node
    let $li = $(templateString);

    // append li to the ul
    $ul.append($li);
  });

  // set ul to the body
  $('body').html($ul);
}

people.fetch().then(renderPeople);

console.log('Hello, World');
