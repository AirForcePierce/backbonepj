import Backbone from 'backbone';
import HeroModel from './person_model';

let HeroCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/Heroes',

  model: HeroModel,

  parse: function(data) {
    return data.results;
  }

});

export default HeroCollection;
