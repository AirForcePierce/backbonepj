import Backbone from 'backbone';
import PersonModel from './person_model';

let PeopleCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/people',

  model: PersonModel,

  parse: function(data) {
    return data.results;
  }

});

export default PeopleCollection;
