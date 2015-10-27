import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'Y6FseeUP87GfDrxo6a2KfhpsLcdDTgVpYIUoU86R';
const API_KEY = 'iFRX3zh4GZSuVlgyQfTcPnqSJdAxeK0ZmDZxY8S8';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import PeopleCollection from './people_collection';
import PersonTemplate from './person_template';

let people = new PeopleCollection();


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
    let templateString = PersonTemplate(data);
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


